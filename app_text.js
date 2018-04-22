function showLoading(fade) {
    $('body').append("<div id='loadingBack'></div>");
}

function rgb2hex(rgb) {
    var hexDigits = new Array
            ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
    function hex(x) {
        return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function startLoaderInit() {
    var prog = 0;
    $('body').append("<div id='loader'></div>");
    $('body').append("<div id='loaderProg'>0</div>");
    intervalLoading = setInterval(function () {
        prog++;
        if (prog < 100) {
            $("#loaderProg").html(prog + " %");
        }
    }, 20);
}

function hideLoading() {
    clearInterval(intervalLoading);
    setTimeout(function () {
        $("#loaderProg").html("100 %");
        $("#loadingBack").fadeOut(2000, function () {
            $("#loadingBack").remove();
        });
        $("#loader").fadeOut(500, function () {
            $("#loader").remove();
        });
        $("#loaderProg").fadeOut(500, function () {
            $("#loaderProg").remove();
        });
    }, 100);
}

function addWordToScene(setting) {
    setTimeout(function () {
        setting.prog = ((-1*(setting.wordTable.wordTable.length - setting.wordCount)) / setting.wordCount)*100;
        $("#wordcloudLoader_text").html(parseInt(setting.prog));
        $("#wordcloudLoader_prog").css({"width": setting.prog/100*250 + "px"});
        return function(){
        if (setting.wordTable.wordTable.length !== 0) {
            setting.i++;
            var wordTableItem = setting.wordTable.wordTable[0];
            var t_fontSize;
            var t_alpha;
            var t_angle;
            var t_color;

            if (setting.t_colormod === 1) {
                setting.t_colormod = 2;
                t_color = setting.color1;
            } else if (setting.t_colormod === 2) {
                setting.t_colormod = 3;
                t_color = setting.color2;
            } else if (setting.t_colormod === 3) {
                setting.t_colormod = 4;
                t_color = setting.color3;
            } else if (setting.t_colormod === 4) {
                setting.t_colormod = 1;
                t_color = setting.color4;
            }
            t_fontSize = Math.ceil((wordTableItem.count / setting.maxWordCount) * setting.fontSizeMax);
            if (t_fontSize < setting.fontSizeMin) {
                t_fontSize = setting.fontSizeMin;
            }

            if (setting.alpha === 1) {
                t_alpha = wordTableItem.count / setting.maxWordCount;
                if (t_alpha < setting.minAlpha) {
                    t_alpha = setting.minAlpha;
                }
            } else {
                t_alpha = 1;
            }

            if (setting.fontdir === 0) {
                t_angle = 0;
            } else if (setting.fontdir === 1) {
                t_angle = 90;
            } else {
                t_angle = setting.i % setting.modAngle === 0 ? 90 : 0;
            }

            setting.scene.addWord(setting.wc.createWord({
                text: wordTableItem.text,
                boundingVolumeMinSize: setting.boundinmgVolumeMinSize,
                angle: t_angle,
                style: {
                    fontSize: t_fontSize,
                    fontFamily: setting.fontFam,
                    fontColor: t_color,
                    fontAlpha: t_alpha
                }
            }), "center", setting.margin);
            setting.wordTable.wordTable.splice(0, 1);
            if (setting.wordTable.wordTable.length !== 0) {
                addWordToScene(setting);
            } else {
                finishWordcloud(setting);
            }
        }}();
    }, 0);
}

function finishWordcloud(setting) {
    var svgScene = setting.scene.getSvg("svgScene");
    var svgWidth = svgScene.getAttribute("width");
    var svgHeight = svgScene.getAttribute("height");
    var windowWidth = window.innerWidth;
    var marginLeft = (windowWidth - parseInt(svgWidth)) / 2;
    svgScene.setAttribute("viewBox", "0 0 " + svgWidth + " " + svgHeight);
    $("#svgWrapper").css({
        "width": svgWidth + "px",
        "margin-left": marginLeft
    });
    document.getElementById("svgWrapper").appendChild(svgScene);
    $("#wordcloudLoader_text").html("100");
    $("#wordcloudLoader_prog").css({"width": 250 + "px"});
    $("#wordcloudLoader_prog").css({"background-color": "#2274A5"});
    $("#wordcloudLoader_back").fadeOut(1000);
    $("#wordcloudLoader_text").fadeOut(1000);
    $("#wordcloudLoader_prog").fadeOut(1000);
    $("#wordcloudLoader").fadeOut(1000);
    t1 = performance.now();
    time = (t1-t0) / 1000;
    glob_setting = setting;
    $("#timer").html('Berechnungszeit: '+time.toFixed(2)+'s');
    $("#timer").fadeIn(1000);
    $("#download").fadeIn(1000);
    
}

function startWordcloud(wc, pathSpir, pathRect) {
    $("#wordcloudLoader_prog").css({"background-color": "#5cb85c"});
    $("#wordcloudLoader_prog").css({"width": 0 + "px"});
    $("#wordcloudLoader_text").html("0");
    $("#wordcloudLoader_back").fadeIn(500);
    $("#wordcloudLoader_text").fadeIn(500);
    $("#wordcloudLoader_prog").fadeIn(500);
    $("#wordcloudLoader").fadeIn(500, function () {
        t0 = performance.now();
        setTimeout(function () {
            $("#svgScene").remove();
            var setting = {
                wc: wc,
                i: 0,
                minAlpha: 0.4,
                boundinmgVolumeMinSize: 4,
                modAngle: 8,
                margin: parseInt($("#input_margin").val()),
                fontFam: $("#input_fontfam").val(),
                color1: rgb2hex($("#input_color1").css("background-color")),
                color2: rgb2hex($("#input_color2").css("background-color")),
                color3: rgb2hex($("#input_color3").css("background-color")),
                color4: rgb2hex($("#input_color4").css("background-color")),
                fontdir: parseInt($("#input_dir").val()),
                fontSizeMax: parseInt($("#input_fontsizemax").val()),
                fontSizeMin: parseInt($("#input_fontsizemin").val()),
                path: null,
                scene: null,
                alpha: parseInt($("#input_alpha").val()),
                words: [],
                t_colormod: 1,
                wordCount: 0,
                wordTable: wc.getWordTableFromText($("#textedit").val(), "german"),
                maxWordCount: null,
                prog: 0
            };

            setting.maxWordCount = setting.wordTable.maxWordCount;
            setting.wordTable.wordTable.sort(function (a, b) {
                return b.count - a.count;
            });

            setting.path = parseInt($("#input_path").val()) === 0 ? pathSpir : pathRect;
            setting.scene = wc.createScene(setting.path);

            setting.wordCount = setting.wordTable.wordCount;

            addWordToScene(setting);
        }, 0);
    });

}

$(document).ready(function () {
    $("#btn_back").click(function(){
        window.location = "index.html";
    });
    
    $("#download").hide();
    $("#timer").hide();
    $("#wordcloudLoader_back").hide();
    $("#wordcloudLoader_text").hide();
    $("#wordcloudLoader_prog").hide();
    $("#wordcloudLoader").hide();
    showLoading();
    startLoaderInit();

    $("#value_margin").html($("#input_margin").val() + " Pixel");
    $("#input_margin").mousemove(function () {
        $("#value_margin").html($("#input_margin").val() + " Pixel");
    });

    if ($("#input_path").val() == 0) {
        $("#value_path").html("Spirale");
    } else if ($("#input_path").val() == 1) {
        $("#value_path").html("Rechteck");
    }
    $("#input_path").mousemove(function () {
        if ($("#input_path").val() == 0) {
            $("#value_path").html("Spirale");
        } else if ($("#input_path").val() == 1) {
            $("#value_path").html("Rechteck");
        }
    });

    if ($("#input_dir").val() == 0) {
        $("#value_dir").html("Horizontal");
    } else if ($("#input_dir").val() == 1) {
        $("#value_dir").html("Vertikal");
    } else if ($("#input_dir").val() == 2) {
        $("#value_dir").html("Beides");
    }
    $("#input_dir").mousemove(function () {
        if ($("#input_dir").val() == 0) {
            $("#value_dir").html("Horizontal");
        } else if ($("#input_dir").val() == 1) {
            $("#value_dir").html("Vertikal");
        } else if ($("#input_dir").val() == 2) {
            $("#value_dir").html("Beides");
        }
    });

    if ($("#input_alpha").val() == 0) {
        $("#value_alpha").html("Nein");
    } else if ($("#input_alpha").val() == 1) {
        $("#value_alpha").html("Ja");
    }
    $("#input_alpha").mousemove(function () {
        if ($("#input_alpha").val() == 0) {
            $("#value_alpha").html("Nein");
        } else if ($("#input_alpha").val() == 1) {
            $("#value_alpha").html("Ja");
        }
    });

    $("#value_fontsizemax").html($("#input_fontsizemax").val() + " Pixel");
    $("#input_fontsizemax").mousemove(function () {
        var min = $("#input_fontsizemin");
        var max = $("#input_fontsizemax");
        var minVal = parseInt(min.val());
        var maxVal = parseInt(max.val());

        if (maxVal < minVal) {
            min.val(maxVal);
            $("#value_fontsizemin").html(maxVal + " Pixel");
        }
        $("#value_fontsizemax").html(maxVal + " Pixel");
    });

    $("#value_fontsizemin").html($("#input_fontsizemin").val() + " Pixel");
    $("#input_fontsizemin").mousemove(function () {
        var min = $("#input_fontsizemin");
        var max = $("#input_fontsizemax");
        var minVal = parseInt(min.val());
        var maxVal = parseInt(max.val());

        if (maxVal < minVal) {
            max.val(minVal);
            $("#value_fontsizemax").html(minVal + " Pixel");
        }
        $("#value_fontsizemin").html(minVal + " Pixel");
    });

    $("#input_color1").ColorPicker({
        onChange: function (bhs, hex) {
            $("#input_color1").css({
                "background-color": "#" + hex
            });
        }
    });

    $("#input_color2").ColorPicker({
        onChange: function (bhs, hex) {
            $("#input_color2").css({
                "background-color": "#" + hex
            });
        }
    });

    $("#input_color3").ColorPicker({
        onChange: function (bhs, hex) {
            $("#input_color3").css({
                "background-color": "#" + hex
            });
        }
    });

    $("#input_color4").ColorPicker({
        onChange: function (bhs, hex) {
            $("#input_color4").css({
                "background-color": "#" + hex
            });
        }
    });

    $("#input_color1").ColorPickerSetColor("32936F");
    $("#input_color2").ColorPickerSetColor("FFBF00");
    $("#input_color3").ColorPickerSetColor("E83F6F");
    $("#input_color4").ColorPickerSetColor("2274A5");
    $("#input_color1").css({"background-color": "#32936F"});
    $("#input_color2").css({"background-color": "#FFBF00"});
    $("#input_color3").css({"background-color": "#E83F6F"});
    $("#input_color4").css({"background-color": "#2274A5"});

    var fontFamilies = [
        'Tangerine',
        'Molle',
        'Damion',
        'Norican'
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
        
        fontFamilies.push("Arial");
        fontFamilies.push("Times New Roman");
        
        $("#download").click(function(){
            wc.downloadSVG(glob_setting.scene.getSvg("svgScene"));
        });


        for (var i = 0; i < fontFamilies.length; i++) {
            $("#input_fontfam").append("<option value='" + fontFamilies[i] + "'>" + fontFamilies[i] + "</option>");
        }

        $("#input_fontfam").change(function () {
            $("#value_fontfam").css({"font-family": $("#input_fontfam").val()});
        });

        $("#input_fontfam").val('Molle');

        $("#value_fontfam").css({"font-family": $("#input_fontfam").val()});


        var pathRect = wc.getRectSpiralPath(10, 5, 2500, 2500, 5000);
        var pathSpir = wc.getSpiralPath(5, 1, 2500, 2500, 5000);

        var exampleText = "Es war einmal ein Mann und eine Frau, die wünschten sich schon lange vergeblich ein Kind, endlich machte sich die Frau Hoffnung, der liebe Gott werde ihren Wunsch erfüllen. Die Leute hatten in ihrem Hinterhaus ein kleines Fenster, daraus konnte man in einen prächtigen Garten sehen, der voll der schönsten Blumen und Kräuter stand; er war aber von einer hohen Mauer umgeben, und niemand wagte hineinzugehen, weil er einer Zauberin gehörte, die große Macht hatte und von aller Welt gefürchtet ward. Eines Tages stand die Frau an diesem Fenster und sah in den Garten hinab, da erblickte sie ein Beet, das mit den schönsten Rapunzeln bepflanzt war; und sie sahen so frisch und grün aus, dass sie lüstern ward und das größte Verlangen empfand, von den Rapunzeln zu essen. Das Verlangen nahm jeden Tag zu, und da sie wusste, dass sie keine davon bekommen konnte, so fiel sie ganz ab, sah blass und elend aus. Da erschrak der Mann und fragte: Was fehlt dir, liebe Frau? - Ach, antwortete sie, wenn ich keine Rapunzeln aus dem Garten hinter unserm Hause zu essen kriege, so sterbe ich. Der Mann, der sie lieb hatte, dachte: Eh du deine Frau sterben läßest, holst du ihr von den Rapunzeln, es mag kosten, was es will. In der Abenddämmerung stieg er also über die Mauer in den Garten der Zauberin, stach in aller Eile eine Handvoll Rapunzeln und brachte sie seiner Frau. Sie machte sich sogleich Salat daraus und aß sie in voller Begierde auf. Sie hatten ihr aber so gut, so gut geschmeckt, dass sie den andern Tag noch dreimal soviel Lust bekam. Sollte sie Ruhe haben, so musste der Mann noch einmal in den Garten steigen. Er machte sich also in der Abenddämmerung wieder hinab, als er aber die Mauer herabgeklettert war, erschrak er gewaltig, denn er sah die Zauberin vor sich stehen. Wie kannst du es wagen, sprach sie mit zornigem Blick, in meinen Garten zu steigen und wie ein Dieb mir meine Rapunzeln zu stehlen? Das soll dir schlecht bekommen. - Ach, antwortete er, lasst Gnade für Recht ergehen, ich habe mich nur aus Not dazu entschlossen: meine Frau hat Eure Rapunzeln aus dem Fenster erblickt, und empfindet ein so großes Gelüsten, dass sie sterben würde, wenn sie nicht davon zu essen bekäme. Da ließ die Zauberin in ihrem Zorne nach und sprach zu ihm: Verhält es sich so, wie du sagst, so will ich dir gestatten, Rapunzeln mitzunehmen, soviel du willst, allein ich mache eine Bedingung: Du musst mir das Kind geben, das deine Frau zur Welt bringen wird. Es soll ihm gut gehen, und ich will für es sorgen wie eine Mutter. Der Mann sagte in der Angst alles zu, und als die Frau in Wochen kam, so erschien sogleich die Zauberin, gab dem Kinde den Namen Rapunzel und nahm es mit sich fort. Rapunzel ward das schönste Kind unter der Sonne. Als es zwölf Jahre alt war, schloss es die Zauberin in einen Turm, der in einem Walde lag, und weder Treppe noch Türe hatte, nur ganz oben war ein kleines Fensterchen. Wenn die Zauberin hinein wollte, so stellte sie sich hin und rief: Rapunzel, Rapunzel, Laß mir dein Haar herunter. Rapunzel hatte lange prächtige Haare, fein wie gesponnen Gold. Wenn sie nun die Stimme der Zauberin vernahm, so band sie ihre Zöpfe los, wickelte sie oben um einen Fensterhaken, und dann fielen die Haare zwanzig Ellen tief herunter, und die Zauberin, stieg daran hinauf. Nach ein paar Jahren trug es sich zu, dass der Sohn des Königs durch den Wald ritt und an dem Turm vorüberkam. Da hörte er einen Gesang, der war so lieblich, dass er still hielt und horchte. Das war Rapunzel, die in ihrer Einsamkeit sich die Zeit vertrieb, ihre süße Stimme erschallen zu lassen. Der Königssohn wollte zu ihr hinaufsteigen und suchte nach einer Türe des Turms, aber es war keine zu finden. Er ritt heim, doch der Gesang hatte ihm so sehr das Herz gerührt, dass er jeden Tag hinaus in den Wald ging und zuhörte. Als er einmal so hinter einem Baum stand, sah er, dass eine Zauberin herankam, und hörte, wie sie hinaufrief: Rapunzel, Rapunzel, Laß dein Haar herunter. Da ließ Rapunzel die Haarflechten herab, und die Zauberin stieg zu ihr hinauf. Ist das die Leiter, auf welcher man hinaufkommt, so will ich auch einmal mein Glück versuchen. Und den folgenden Tag, als es anfing dunkel zu werden, ging er zu dem Turme und rief: Rapunzel, Rapunzel, Laß dein Haar herunter. Alsbald fielen die Haare herab, und der Königssohn stieg hinauf. Anfangs erschrak Rapunzel gewaltig, als ein Mann zu ihr hereinkam, wie ihre Augen noch nie einen erblickt hatten, doch der Königssohn fing an ganz freundlich mit ihr zu reden und erzählte ihr, dass von ihrem Gesang sein Herz so sehr sei bewegt worden, dass es ihm keine Ruhe gelassen und er sie selbst habe sehen müssen. Da verlor Rapunzel ihre Angst, und als er sie fragte, ob sie ihn zum Mann nehmen wollte, und sie sah, dass er jung und schön war, so dachte sie: Der wird mich lieber haben als die alte Frau Gothel, und sagte ja, und legte ihre Hand in seine Hand. Sie sprach: Ich will gerne mit dir gehen, aber ich weiß nicht, wie ich herabkommen kann. Wenn du kommst, so bringe jedesmal einen Strang Seide mit, daraus will ich eine Leiter flechten, und wenn die fertig ist, so steige ich herunter und du nimmst mich auf dein Pferd. Sie verabredeten, dass er bis dahin alle Abend zu ihr kommen sollte, denn bei Tag kam die Alte. Die Zauberin merkte auch nichts davon, bis einmal Rapunzel anfing und zu ihr sagte: Sag Sie mir doch, Frau Gothel, wie kommt es nur, sie wird mir viel schwerer heraufzuziehen als der junge Königssohn, der ist in einem Augenblick bei mir. - Ach du gottloses Kind, rief die Zauberin, was muss ich von dir hören, ich dachte, ich hätte dich von aller Welt geschieden, und du hast mich doch betrogen! In ihrem Zorne packte sie die schönen Haare der Rapunzel, schlug sie ein paarmal um ihre linke Hand, griff eine Schere mit der rechten, und ritsch, ratsch waren sie abgeschnitten, und die schönen Flechten lagen auf der Erde. Und sie war so unbarmherzig, dass sie die arme Rapunzel in eine Wüstenei brachte, wo sie in großem Jammer und Elend leben musste. Denselben Tag aber, wo sie Rapunzel verstoßen hatte, machte abends die Zauberin die abgeschnittenen Flechten oben am Fensterhaken fest, und als der Königssohn kam und rief: Rapunzel, Rapunzel, Laß dein Haar herunter. so ließ sie die Haare hinab. Der Königssohn stieg hinauf, aber er fand oben nicht seine liebste Rapunzel, sondern die Zauberin, die ihn mit bösen und giftigen Blicken ansah. Aha, rief sie höhnisch, du willst die Frau Liebste holen, aber der schöne Vogel sitzt nicht mehr im Nest und singt nicht mehr, die Katze hat ihn geholt und wird dir auch noch die Augen auskratzen. Für dich ist Rapunzel verloren, du wirst sie nie wieder erblicken. Der Königssohn geriet außer sich vor Schmerzen, und in der Verzweiflung sprang er den Turm herab: das Leben brachte er davon, aber die Dornen, in die er fiel, zerstachen ihm die Augen. Da irrte er blind im Walde umher, aß nichts als Wurzeln und Beeren, und tat nichts als jammern und weinen über den Verlust seiner liebsten Frau. So wanderte er einige Jahre im Elend umher und geriet endlich in die Wüstenei, wo Rapunzel mit den Zwillingen, die sie geboren hatte, einem Knaben und Mädchen, kümmerlich lebte. Er vernahm eine Stimme, und sie deuchte ihn so bekannt; da ging er darauf zu, und wie er herankam, erkannte ihn Rapunzel und fiel ihm um den Hals und weinte. Zwei von ihren Tränen aber benetzten seine Augen, da wurden sie wieder klar, und er konnte damit sehen wie sonst. Er führte sie in sein Reich, wo er mit Freude empfangen ward, und sie lebten noch lange glücklich und vergnügt.";
        $("#textedit").val(exampleText);


        ////// READY TO RUMBLE //////
        hideLoading();

        $("#btn_start").click(function () {
            startWordcloud(wc, pathSpir, pathRect);
        });
    });
});