function showLoading() {
    $('body').append('<div id="loadingBack"></div>');
}

function rgb2hex(rgb) {
    var hexDigits = new Array
            ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');
    function hex(x) {
        return isNaN(x) ? '00' : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function startLoaderInit() {
    var prog = 0;
    $('body').append('<div id="loader"></div>');
    $('body').append('<div id="loaderProg">0</div>');
    intervalLoading = setInterval(function () {
        prog++;
        if (prog < 100) {
            $('#loaderProg').html(prog + ' %');
        }
    }, 10);
}

function hideLoading() {
    clearInterval(intervalLoading);
    setTimeout(function () {
        $('#loaderProg').html('100 %');
        $('#loadingBack').fadeOut(2000, function () {
            $('#loadingBack').remove();
        });
        $('#loader').fadeOut(500, function () {
            $('#loader').remove();
        });
        $('#loaderProg').fadeOut(500, function () {
            $('#loaderProg').remove();
        });
    }, 100);
}

function addWordToScene(setting) {
    setTimeout(function () {
        setting.prog = (setting.anzworte_current / setting.anzworte) * 100;
        $('#wordcloudLoader_text').html(parseInt(setting.prog));
        $('#wordcloudLoader_prog').css({'width': setting.prog / 100 * 250 + 'px'});
        return function () {
            var progress = setting.anzworte_current / setting.anzworte;
            if (setting.anzworte_current < setting.anzworte) {
                if(setting.currentFontSize>setting.fontSizeMin)
                    setting.currentFontSize--;
                
                
                
                setting.scene.addWord(setting.wc.createWord({
                    text: 'Erdbeere',
                    boundingVolumeMinSize: setting.boundinmgVolumeMinSize,
                    angle: 0,
                    style: {
                        fontSize: setting.currentFontSize,
                        fontFamily: setting.fontFam,
                        fontColor: '#ffffff'
                    }
                }), 'center', setting.margin);

                setting.anzworte_current++;

                if (setting.anzworte_current < setting.anzworte) {
                    addWordToScene(setting);
                } else {
                    finishWordcloud(setting);
                }
            }
        }();
    }, 0);
}

function finishWordcloud(setting) {
    var svgScene = setting.scene.getSvg('svgScene');
    var svgWidth = svgScene.getAttribute('width');
    var svgHeight = svgScene.getAttribute('height');
    var windowWidth = window.innerWidth;
    var marginLeft = (windowWidth - parseInt(svgWidth)) / 2;
    svgScene.setAttribute('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight);
    $('#svgWrapper').css({
        'width': svgWidth + 'px',
        'margin-left': marginLeft
    });
    document.getElementById('svgWrapper').appendChild(svgScene);
    $('#wordcloudLoader_text').html('100');
    $('#wordcloudLoader_prog').css({'width': 250 + 'px'});
    $('#wordcloudLoader_prog').css({'background-color': '#2274A5'});
    $('#wordcloudLoader_back').fadeOut(1000);
    $('#wordcloudLoader_text').fadeOut(1000);
    $('#wordcloudLoader_prog').fadeOut(1000);
    $('#wordcloudLoader').fadeOut(1000);
    t1 = performance.now();
    time = (t1 - t0) / 1000;
    glob_setting = setting;
    $('#timer').html('Berechnungszeit: ' + time.toFixed(2) + 's');
    $('#timer').fadeIn(1000);
    $('#download').fadeIn(1000);

}

function startWordcloud(wc, pathSpir, pathRect) {
    $('#wordcloudLoader_prog').css({'background-color': '#5cb85c'});
    $('#wordcloudLoader_prog').css({'width': 0 + 'px'});
    $('#wordcloudLoader_text').html('0');
    $('#wordcloudLoader_back').fadeIn(500);
    $('#wordcloudLoader_text').fadeIn(500);
    $('#wordcloudLoader_prog').fadeIn(500);
    $('#wordcloudLoader').fadeIn(500, function () {
        t0 = performance.now();
        setTimeout(function () {
            $('#svgScene').remove();
            var setting = {
                wc: wc,
                i: 0,
                minAlpha: 0.4,
                boundinmgVolumeMinSize: 4,
                modAngle: 5,
                margin: 0,
                fontFam: $('#input_fontfam').val(),
                color1: rgb2hex($('#input_color1').css('background-color')),
                color2: rgb2hex($('#input_color2').css('background-color')),
                color3: rgb2hex($('#input_color3').css('background-color')),
                color4: rgb2hex($('#input_color4').css('background-color')),
                fontdir: parseInt($('#input_dir').val()),
                fontSizeMax: 100,
                fontSizeMin: 8,
                currentFontSize:100,
                path: null,
                scene: null,
                alpha: parseInt($('#input_alpha').val()),
                words: [],
                t_colormod: 1,
                wordCount: 0,
                anzworte: 1000,
                anzworte_current: 0,
                variant: 1,
                maxWordCount: null,
                prog: 0
            };

            setting.path = parseInt($('#input_path').val()) === 0 ? pathSpir : pathRect;
            setting.scene = wc.createScene(setting.path);

            addWordToScene(setting);
        }, 0);
    });

}

$(document).ready(function () {
    $('#btn_back').click(function () {
        window.location = 'index.html';
    });

    $('#download').hide();
    $('#timer').hide();
    $('#wordcloudLoader_back').hide();
    $('#wordcloudLoader_text').hide();
    $('#wordcloudLoader_prog').hide();
    $('#wordcloudLoader').hide();
    showLoading();
    startLoaderInit();

    $('#value_margin').html($('#input_margin').val() + ' Pixel');
    $('#input_margin').mousemove(function () {
        $('#value_margin').html($('#input_margin').val() + ' Pixel');
    });

    if ($('#input_path').val() == 0) {
        $('#value_path').html('Spirale');
    } else if ($('#input_path').val() == 1) {
        $('#value_path').html('Rechteck');
    }
    $('#input_path').mousemove(function () {
        if ($('#input_path').val() == 0) {
            $('#value_path').html('Spirale');
        } else if ($('#input_path').val() == 1) {
            $('#value_path').html('Rechteck');
        }
    });

    if ($('#input_dir').val() == 0) {
        $('#value_dir').html('Horizontal');
    } else if ($('#input_dir').val() == 1) {
        $('#value_dir').html('Vertikal');
    } else if ($('#input_dir').val() == 2) {
        $('#value_dir').html('Schief');
    } else if ($('#input_dir').val() == 3) {
        $('#value_dir').html('Horizontal und Vertikal');
    }
    $('#input_dir').mousemove(function () {
        if ($('#input_dir').val() == 0) {
            $('#value_dir').html('Horizontal');
        } else if ($('#input_dir').val() == 1) {
            $('#value_dir').html('Vertikal');
        } else if ($('#input_dir').val() == 2) {
            $('#value_dir').html('Schief');
        } else if ($('#input_dir').val() == 3) {
            $('#value_dir').html('Horizontal und Vertikal');
        }
    });

    $('#value_anzworte').html($('#input_anzworte').val());
    $('#input_anzworte').mousemove(function () {
        $('#value_anzworte').html($('#input_anzworte').val());
    });

    $('#value_fontsizemax').html($('#input_fontsizemax').val() + ' Pixel');
    $('#input_fontsizemax').mousemove(function () {
        var min = $('#input_fontsizemin');
        var max = $('#input_fontsizemax');
        var minVal = parseInt(min.val());
        var maxVal = parseInt(max.val());

        if (maxVal < minVal) {
            min.val(maxVal);
            $('#value_fontsizemin').html(maxVal + ' Pixel');
        }
        $('#value_fontsizemax').html(maxVal + ' Pixel');
    });

    $('#value_fontsizemin').html($('#input_fontsizemin').val() + ' Pixel');
    $('#input_fontsizemin').mousemove(function () {
        var min = $('#input_fontsizemin');
        var max = $('#input_fontsizemax');
        var minVal = parseInt(min.val());
        var maxVal = parseInt(max.val());

        if (maxVal < minVal) {
            max.val(minVal);
            $('#value_fontsizemax').html(minVal + ' Pixel');
        }
        $('#value_fontsizemin').html(minVal + ' Pixel');
    });

    $('#input_color1').ColorPicker({
        onChange: function (bhs, hex) {
            $('#input_color1').css({
                'background-color': '#' + hex
            });
        }
    });

    $('#input_color2').ColorPicker({
        onChange: function (bhs, hex) {
            $('#input_color2').css({
                'background-color': '#' + hex
            });
        }
    });

    $('#input_color3').ColorPicker({
        onChange: function (bhs, hex) {
            $('#input_color3').css({
                'background-color': '#' + hex
            });
        }
    });

    $('#input_color4').ColorPicker({
        onChange: function (bhs, hex) {
            $('#input_color4').css({
                'background-color': '#' + hex
            });
        }
    });

    $('#input_color1').ColorPickerSetColor('32936F');
    $('#input_color2').ColorPickerSetColor('FFBF00');
    $('#input_color3').ColorPickerSetColor('E83F6F');
    $('#input_color4').ColorPickerSetColor('2274A5');
    $('#input_color1').css({'background-color': '#32936F'});
    $('#input_color2').css({'background-color': '#FFBF00'});
    $('#input_color3').css({'background-color': '#E83F6F'});
    $('#input_color4').css({'background-color': '#2274A5'});

    var fontFamilies = [
        'Tangerine',
        'Molle',
        'Damion',
        'Norican',
        'Blackout',
        'Robot Crush',
        'Sketch Book',
        'BadaBoom BB'
    ];

    wc = new WordcloudJS();
    wc.loadFonts({
        custom: {
            families: fontFamilies,
            urls: [
                'fonts/fonts.css'
            ]
        }
    }, function () {
        fontFamilies.push('Arial');
        fontFamilies.push('Times New Roman');
        $('#download').click(function () {
            wc.downloadSVG(glob_setting.scene.getSvg('svgScene'));
        });

        for (var i = 0; i < fontFamilies.length; i++) {
            $('#input_fontfam').append(`<option value="${fontFamilies[i]}">${fontFamilies[i]}</option>`);
        }

        $('#input_fontfam').change(function () {
            $('#value_fontfam').css({'font-family': $('#input_fontfam').val()});
        });

        $('#input_fontfam').val('Molle');

        $('#value_fontfam').css({'font-family': $('#input_fontfam').val()});

        var pathRect = wc.getRectSpiralPath(10, 5, 5000, 5000, 5000);
        var pathSpir = wc.getSpiralPath(10, 2, 5000, 5000, 5000);

        var exampleText = 'Banane Erdbeere Kiwi Apfel Acai Kirsche Pflaume Orange Zitrone';
        $('#textedit').val(exampleText);

        hideLoading();

        $('#btn_start').click(function () {
            startWordcloud(wc, pathSpir, pathRect);
        });
    });
});


