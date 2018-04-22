/**
 * @type WordcloudJS WordcloudJS Namespace
 */
var WordcloudJS = WordcloudJS || {};

/**
 * Instanziiert ein WordcloudJS.core Objekt
 * @constructor
 * @returns {WordcloudJS.core}
 */
WordcloudJS = function () {
    return new WordcloudJS.core();
};

/**
 * Instanziiert ein WordcloudJS.core Objekt
 * @constructor
 * @returns {WordcloudJS.core}
 */
WordcloudJS.core = function () {

};

WordcloudJS.core.prototype = {
    /**
     * Fonts über WebFontLoader Framework laden.
     * Übergeben wird das webFontConfig Objekt mit den Fonts  (Siehe WebFontLoader API). 
     * Die Events active,inactive, fontactive,fontinactive müssen nicht mit übergeben werden.
     * Sobald die Fonts geladen sind, wird die übergebene Funktion ready ausgeführt.
     * @param {Object}   webFontConfig
     * @param {function} ready 
     * @returns {undefined}
     */
    loadFonts: function (webFontConfig, ready) {

        if (webFontConfig != null) {
            webFontConfig.active = function () {
                console.log("WebFont loading finished!");
                ready();
            };
            webFontConfig.inactive = function () {
                console.log("WebFont loading failed!");
            };
            webFontConfig.fontactive = function (familyName, fvd) {
                console.log("Font loaded: " + familyName);
            };
            webFontConfig.fontinactive = function (familyName, fvd) {
                console.log("Font failed: " + familyName);
            };
            WebFont.load(webFontConfig);
        } else {
            console.log("No webFontConfig!");
        }
    },
    getWordTableFromText: function (text, language) {
        var wordTable = [];
        var words = [];
        var stopwords;
        var reg;
        var minCount = 0;
        var maxCount = 0;
        var tempCount;
        var hashTable = {};

        switch (language) {
            case "german":
                stopwords = WordcloudJS.stopwords.german;
                break;
            case "english":
                stopwords = WordcloudJS.stopwords.english;
                break;
        }

        text = " " + text + " ";

        // Alle nicht alphabetischen numerischen Zeichen entfernen
        text = text.replace(/[^a-zA-Z ä ö ü 0-9]+/g, ' ');

        // Alle überflüssigen Leerzeichen entfernen
        text = text.replace(/\s\s+/g, ' ');

        // Alle Stoppwörter entfernen
        for (var i = 0; i < stopwords.length; i++) {
            reg = new RegExp('\\s' + stopwords[i] + '\\s', 'gi');
            text = text.replace(reg, " ");
        }

        words = text.split(" ");


        var first = true;
        for (var i = 0; i < words.length; i++) {
            if (words[i] != " " && words[i] != "") {
                if (hashTable[words[i].toLowerCase()] == null) {
                    tempCount = text.match(new RegExp("\\s" + words[i] + '\\s', 'gi')).length;
                    if (first) {
                        first = false;
                        minCount = tempCount;
                        maxCount = tempCount;
                    } else {
                        if (minCount > tempCount) {
                            minCount = tempCount;
                        }
                        if (maxCount < tempCount) {
                            maxCount = tempCount;
                        }
                    }

                    hashTable[words[i].toLowerCase()] = words[i].toLowerCase();
                    wordTable.push({
                        text: words[i],
                        count: tempCount
                    });
                }
            }
        }

        return {
            wordCount: wordTable.length,
            minWordCount: minCount,
            maxWordCount: maxCount,
            wordTable: wordTable
        };
    },
    /**
     * <strong>createWord</strong>
     * <br>Instanziiert ein WordcloudJS.word Objekt
     * <br>
     * @function
     * @param {object} options Objekt mit Optionen: <br>
     * <br>text: {string},
     * <br>id: {string},
     * <br>class: {string},
     * <br>boundingVolumeMinSize: {number},
     * <br>style: {
     * <br>&emsp;    "fontStyle": {string},
     * <br>&emsp;     "fontVariant": {string},
     * <br>&emsp;    "fontWeight": {string},
     * <br>&emsp;     "fontSize": {number},
     * <br>&emsp;     "fontFamily": {string},
     * <br>&emsp;     "fontColor": {string}
     * <br>}
     * @returns {WordcloudJS.word}
     */
    createWord: function (options) {
        return new WordcloudJS.word(options);
    },
    getSpiralPath: function (distPoints, distCoils, maxRadius, startX, startY) {
        var points = [];

        var x = startX;
        var y = startY;

        var angle = 0;

        while (Math.abs(x - startX) < maxRadius) {
            angle += distPoints / ((Math.PI * 2) + distCoils * angle);
            x = parseInt(startX + (distCoils * angle) * Math.cos(angle));
            y = parseInt(startY + (distCoils * angle) * Math.sin(angle));

            points.push({
                x: x,
                y: y
            });
        }

        return points;
    },
    getRectSpiralPath: function (distPoints, distCoils, maxRadius, startX, startY) {
        var points = [{
                x: startX,
                y: startY
            }];

        var x = startX;
        var y = startY;
        var direction = "left";
        var width = distCoils;
        var step = 0;

        while (Math.abs(x - startX) < maxRadius) {
            switch (direction) {
                case "left":
                    x = x - 1;
                    step++;
                    if (step > width) {
                        step = 0;
                        width += 1 + distCoils;
                        direction = "bottom";
                    }
                    break;
                case "bottom":
                    y = y + 1;
                    step++;
                    if (step === width) {
                        step = 0;
                        direction = "right";
                    }
                    break;
                case "right":
                    x = x + 1;
                    step++;
                    if (step > width) {
                        step = 0;
                        width += 1 + distCoils;
                        direction = "top";
                    }
                    break;
                case "top":
                    y = y - 1;
                    step++;
                    if (step === width) {
                        step = 0;
                        direction = "left";
                    }
                    break;
            }
            if (step % distPoints === 0) {
                points.push({
                    x: x,
                    y: y
                });
            }
        }

        return points;
    },
    getRandomPath: function (width, height, maxPoints) {
        var points = [];

        while (points.length <= maxPoints) {
            points.push({
                x: parseInt(Math.random() * width),
                y: parseInt(Math.random() * height)
            });
        }

        return points;
    },
    createScene: function (path) {
        return new WordcloudJS.scene(path);
    },
    downloadSVG: function (svg) {
        var xmlSvg = new XMLSerializer().serializeToString(svg);
        var base64 = window.btoa(unescape(encodeURIComponent(xmlSvg)));
        var event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });

        var a = document.createElement('a');
        a.setAttribute('download', 'Wordcloud.svg');
        a.setAttribute('href', 'data:image/svg+xml;base64,' + base64);
        a.setAttribute('target', '_blank');
        a.dispatchEvent(event);
    },
    getRandomPastelColor: function () {
        var r = (Math.round(Math.random() * 127) + 127).toString(16);
        var g = (Math.round(Math.random() * 127) + 127).toString(16);
        var b = (Math.round(Math.random() * 127) + 127).toString(16);
        return '#' + r + g + b;
    },
    drawPath: function (ctx, path, drawLines, lineColor, drawPoints, pointColor, pointRadius) {
        if (drawPoints) {
            ctx.arc(path[0].x, path[0].y, pointRadius, 0, 2 * Math.PI);
            ctx.fillStyle = pointColor;
            ctx.fill();
        }
        for (var i = 1; i < path.length; i++) {
            if (drawLines) {
                ctx.beginPath();
                ctx.moveTo(path[i - 1].x, path[i - 1].y);
                ctx.lineTo(path[i].x, path[i].y);
                ctx.strokeWidth = 1;
                ctx.strokeStyle = lineColor;
                ctx.stroke();
            }
            if (drawPoints) {
                ctx.beginPath();
                ctx.arc(path[i].x, path[i].y, pointRadius, 0, 2 * Math.PI);
                ctx.fillStyle = pointColor;
                ctx.fill();
            }
        }
    }
};

WordcloudJS.scene = function (path) {
    this.words = [];
    this.path = path;
};

WordcloudJS.scene.prototype = {
    addWord: function (word, position, minMargin) {
        if (minMargin == null) {
            minMargin = 0;
        }
        var collision = true;
        var cachedWordPosition;
        var cachedWord = false;

        var pathLength = this.path.length;
        var wordsLength = this.words.length;

        var positionShiftX;
        var positionShiftY;

        if (position === "center") {
            positionShiftX = -word.width / 2;
            positionShiftY = -word.height / 2;
        } else if (position === "left") {
            positionShiftX = 0;
            positionShiftY = 0;
        } else if (position === "right") {
            positionShiftX = -word.width;
            positionShiftY = -word.height;
        } else {
            positionShiftX = -word.width / 2;
            positionShiftY = -word.height / 2;
        }

        // Wörter platzieren
        for (var j = 0; j < pathLength && collision; j++) {
            collision = false;
            // Pathpunkt setzen
            word.move(this.path[j].x + positionShiftX, this.path[j].y + positionShiftY);
            // Kollision prüfen
//            for (var k = 0; k < wordsLength && !collision; k++) {
//                collision = this.boundingVolumeHierarchyCollision(word.boundingVolume, this.words[k].boundingVolume, minMargin);
//            }

            if (cachedWord) {
                collision = this.boundingVolumeHierarchyCollision(word.boundingVolume, this.words[cachedWordPosition].boundingVolume, minMargin);
            }

            for (var k = 0; k < wordsLength && !collision; k++) {
                if (!cachedWord || cachedWord && k !== cachedWordPosition) {
                    collision = this.boundingVolumeHierarchyCollision(word.boundingVolume, this.words[k].boundingVolume, minMargin);
                    if (collision) {
                        cachedWord = true;
                        cachedWordPosition = k;
                    }
                }
            }
        }
        this.words.push(word);
    },
    getSvg: function (id) {
        var minMaxObj = this.words[0].getMinMax();
        var minX = minMaxObj.minX;
        var maxX = minMaxObj.maxX;
        var minY = minMaxObj.minY;
        var maxY = minMaxObj.maxY;
        var width;
        var height;
        var svgScene = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var svgText;
        var x;
        var y;
        var rotationAnchorX;
        var rotationAnchorY;

        // Breite und Höhe ermitteln
        // Alle Wörter durchgehen und minmalstes X und Y und maximalstes X und Y ermitteln
        if (this.words.length > 1) {
            for (var i = 1; i < this.words.length; i++) {
                minMaxObj = this.words[i].getMinMax();
                minX = minMaxObj.minX < minX ? minMaxObj.minX : minX;
                maxX = minMaxObj.maxX > maxX ? minMaxObj.maxX : maxX;
                minY = minMaxObj.minY < minY ? minMaxObj.minY : minY;
                maxY = minMaxObj.maxY > maxY ? minMaxObj.maxY : maxY;
            }
        }

        width = maxX - minX;
        height = maxY - minY;

        svgScene.setAttribute("version", "1.1");
        svgScene.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgScene.setAttribute("id", id);
        svgScene.setAttribute("width", width);
        svgScene.setAttribute("height", height);

        // Wörter in Svg konvertieren
        // Normalisieren: minX und minY auf Ursprung 0/0 schieben
        for (var i = 0; i < this.words.length; i++) {
            // Position berechnen
            x = (minX * (-1)) + this.words[i].position.x + this.words[i].anchorOffsetX;
            y = (minY * (-1)) + this.words[i].position.y + this.words[i].anchorOffsetY;
            // Rotationspunkt berechnen
            rotationAnchorX = x + this.words[i].rotationAnchorX;
            rotationAnchorY = y + this.words[i].rotationAnchorY;
            svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            // Attribute setzen
            svgText.setAttribute("version", "1.1");
            svgText.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            if (this.words[i].id != "") {
                svgText.setAttribute("id", this.words[i].id);
            }
            if (this.words[i].class != "") {
                svgText.setAttribute("class", this.words[i].class);
            }
            svgText.setAttribute("alignment-baseline", "text-before-edge");
            svgText.setAttribute("text-anchor", "start");
            svgText.setAttribute("x", x);
            svgText.setAttribute("y", y);
            svgText.setAttribute("font-family", this.words[i].style.fontFamily);
            svgText.setAttribute("font-size", this.words[i].style.fontSize);
            svgText.setAttribute("font-variant", this.words[i].style.fontVariant);
            svgText.setAttribute("font-weight", this.words[i].style.fontWeight);
            svgText.setAttribute("font-style", this.words[i].style.fontStyle);
//            svgText.setAttribute("fill-opacity", this.words[i].style.fontAlpha);
            svgText.setAttribute("fill", this.words[i].style.fontColor);
            if (this.words[i].angle != 0) {
                svgText.setAttribute("transform", "rotate(" + this.words[i].angle + "," + rotationAnchorX + "," + rotationAnchorY + ")");
            }
            svgText.textContent = this.words[i].text;
            svgScene.appendChild(svgText);
        }

        return svgScene;
    },
    getCanvas: function (id) {
        var minMaxObj = this.words[0].getMinMax();
        var minX = minMaxObj.minX;
        var maxX = minMaxObj.maxX;
        var minY = minMaxObj.minY;
        var maxY = minMaxObj.maxY;
        var width;
        var height;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var font;
        var x;
        var y;
        var rotationAnchorX;
        var rotationAnchorY;

        // Breite und Höhe ermitteln
        // Alle Wörter durchgehen und minmalstes X und Y und maximalstes X und Y ermitteln
        if (this.words.length > 1) {
            for (var i = 1; i < this.words.length; i++) {
                minMaxObj = this.words[i].getMinMax();
                minX = minMaxObj.minX < minX ? minMaxObj.minX : minX;
                maxX = minMaxObj.maxX > maxX ? minMaxObj.maxX : maxX;
                minY = minMaxObj.minY < minY ? minMaxObj.minY : minY;
                maxY = minMaxObj.maxY > maxY ? minMaxObj.maxY : maxY;
            }
        }

        width = maxX - minX;
        height = maxY - minY;

        canvas.setAttribute("id", id);
        canvas.setAttribute("style", "border:1px solid black;");
        canvas.width = width;
        canvas.height = height;

        // Wörter in Canvas zeichnen
        // Normalisieren: minX und minY auf Ursprung 0/0 schieben
        for (var i = 0; i < this.words.length; i++) {
            // Position berechnen
            x = (minX * (-1)) + this.words[i].position.x + this.words[i].anchorOffsetX;
            y = (minY * (-1)) + this.words[i].position.y + this.words[i].anchorOffsetY;
            // Rotationspunkt berechnen
            rotationAnchorX = x + this.words[i].rotationAnchorX;
            rotationAnchorY = y + this.words[i].rotationAnchorY;

            font = this.words[i].style.fontStyle + " ";
            font += this.words[i].style.fontVariant + " ";
            font += this.words[i].style.fontWeight + " ";
            font += this.words[i].style.fontSize + "px ";
            font += this.words[i].style.fontFamily;
            ctx.font = font;
            ctx.textBaseline = "top";
            ctx.textAlign = "left";
            if (this.words[i].angle !== 0) {
                ctx.translate(rotationAnchorX, rotationAnchorY);
                ctx.rotate(this.words[i].angle * Math.PI / 180);
                ctx.translate(-rotationAnchorX, -rotationAnchorY);
            }
            ctx.fillStyle = this.words[i].style.fontColor;
            ctx.fillText(this.words[i].text, x, y);
            if (this.words[i].angle !== 0) {
                ctx.translate(rotationAnchorX, rotationAnchorY);
                ctx.rotate(-this.words[i].angle * Math.PI / 180);
                ctx.translate(-rotationAnchorX, -rotationAnchorY);
            }
        }

        return canvas;
    },
    boundingVolumeCollision: function (boundingVolume1, boundingVolume2, minMargin) {
        if (minMargin == null) {
            minMargin = 0;
        }
        // Bounding Volume verschieben auf Position des Wortes
        var rect1 = {
            x: boundingVolume1.x + boundingVolume1.word.position.x - minMargin,
            y: boundingVolume1.y + boundingVolume1.word.position.y - minMargin,
            width: boundingVolume1.width + minMargin,
            height: boundingVolume1.height + minMargin
        };

        var rect2 = {
            x: boundingVolume2.x + boundingVolume2.word.position.x - minMargin,
            y: boundingVolume2.y + boundingVolume2.word.position.y - minMargin,
            width: boundingVolume2.width + minMargin,
            height: boundingVolume2.height + minMargin
        };
        if (rect1.x <= rect2.x + rect2.width &&
                rect1.x + rect1.width >= rect2.x &&
                rect1.y <= rect2.y + rect2.height &&
                rect1.height + rect1.y >= rect2.y) {
            return true;
        }

        return false;
    },
    boundingVolumeHierarchyCollision: function (boundingVolume1, boundingVolume2, minMargin, result) {
        if (result == null) {
            result = false;
        }

        // Wenn eine Kollision gefgunden wurde, aufhören zu suchen.  
        if (!result) {
            if (boundingVolume1.isFilled && boundingVolume2.isFilled && this.boundingVolumeCollision(boundingVolume1, boundingVolume2, minMargin)) {
                if (boundingVolume1.hasChildren()) {
                    for (var i = 0; i < 2; i++) {
                        // Wenn eine Kollision gefgunden wurde, aufhören zu suchen.  
                        if (!result) {
                            result = this.boundingVolumeHierarchyCollision(boundingVolume1.children[i], boundingVolume2, minMargin, result);
                        } else {
                            return result;
                        }
                    }
                } else {
                    if (boundingVolume2.hasChildren()) {
                        for (var i = 0; i < 2; i++) {
                            // Wenn eine Kollision gefgunden wurde, aufhören zu suchen.  
                            if (!result) {
                                result = this.boundingVolumeHierarchyCollision(boundingVolume1, boundingVolume2.children[i], minMargin, result);
                            } else {
                                return result;
                            }
                        }
                    } else {
                        result = true;
                    }
                }
            }
        }

        return result;
    }
};

/**
 * <strong>createWord</strong>
 * <br>Instanziiert ein WordcloudJS.word Objekt
 * <br>
 * @function
 * @param {object} options Objekt mit Optionen: <br>
 * <br>text: {string},
 * <br>id: {string},
 * <br>class: {string},
 * <br>boundingVolumeMinSize: {number},
 * <br>style: {
 * <br>&emsp;    "fontStyle": {string},
 * <br>&emsp;     "fontVariant": {string},
 * <br>&emsp;    "fontWeight": {string},
 * <br>&emsp;     "fontSize": {number},
 * <br>&emsp;     "fontFamily": {string},
 * <br>&emsp;     "fontColor": {string}
 * <br>}
 * @returns {WordcloudJS.word}
 */
WordcloudJS.word = function (options) {
    this.text = "Hello";
    this.id = "";
    this.class = "";
    this.boundingVolumeMinSize = 4;
    this.style = {
        "fontStyle": "normal",
        "fontVariant": "normal",
        "fontWeight": "normal",
        "fontSize": 12,
        "fontFamily": "Arial",
        "fontColor": "#000000",
        "fontAlpha": 1
    };
    this.position = {
        x: 0,
        y: 0
    };
    this.width = 0;
    this.height = 0;
    this.angle = 0;
    this.anchorOffsetX = 0;
    this.anchorOffsetY = 0;
    this.rotationAnchorX = 0;
    this.rotationAnchorY = 0;
    this.imageData = null;
    this.imageData32 = null;
    this.boundingVolume = null;

    // Attribute setzen aus options
    if (options != null) {

        if (options.text != null) {
            this.text = options.text;
        }

        if (options.boundingVolumeMinSize != null) {
            this.boundingVolumeMinSize = options.boundingVolumeMinSize;
        }

        if (options.angle != null) {
            this.angle = options.angle;
        }

        if (options.style != null) {

            if (options.style.fontStyle != null) {
                this.style.fontStyle = options.style.fontStyle;
            }

            if (options.style.fontVariant != null) {
                this.style.fontVariant = options.style.fontVariant;
            }

            if (options.style.fontWeight != null) {
                this.style.fontWeight = options.style.fontWeight;
            }

            if (options.style.fontSize != null) {
                this.style.fontSize = options.style.fontSize;
            }

            if (options.style.fontFamily != null) {
                this.style.fontFamily = options.style.fontFamily;
            }

            if (options.style.fontColor != null) {
                this.style.fontColor = options.style.fontColor;
            }

            if (options.style.fontAlpha != null) {
                this.style.fontAlpha = options.style.fontAlpha;
            }
        }
    }

    // Berechnung der Wortmetriken
    var div;
    var style;
    var divBounding;
    var divWidth;
    var divHeight;
    var divOffsetWidth;
    var divOffsetHeight;
    var canvasWidth;
    var canvasHeight;
    var newCanvasWidth;
    var newCanvasHeight;
    var paddingX;
    var paddingY;
    var canvas;
    var ctx;
    var font;
    var imageData;
    var newImageData;
    var data;
    var data32;
    var yMax;
    var yMin;
    var xMax;
    var xMin;
    var offsetY;
    var offsetX;
    var pixelFound;

    // Hilfs-Div erzeugen
    // Dieser wird vorallem benötigt, um eine ungefähre Breite und Höhe des Textes
    // zu ermitteln. Die Größen sind allerdings nicht exakt. Daher muss eine genauere 
    // Berechnung der Größen mittels Canvas stattfinden
    div = document.createElement('div');
    div.id = "wordDimensionDiv1";
    style = "display: inline-block; ";
    style += "position: absolute; ";
    style += "visibility: hidden; ";
    style += "top: 0; ";
    style += "left: 0; ";
    style += "white-space: nowrap; ";
    style += "-moz-transform: rotate(" + this.angle + "deg); ";
    style += "-ms-transform: rotate(" + this.angle + "deg);";
    style += "-o-transform: rotate(" + this.angle + "deg);";
    style += "-webkit-transform: rotate(" + this.angle + "deg);";
    style += "font-size: " + this.style.fontSize + "px; ";
    style += "font-weight: " + this.style.fontWeight + "; ";
    style += "font-family: " + this.style.fontFamily + "; ";
    style += "font-variant: " + this.style.fontVariant + "; ";
    style += "font-style: " + this.style.fontStyle + "; ";
    div.setAttribute("style", style);
    div.textContent = this.text;
    document.body.appendChild(div);

    // Durch die Drehung ändert sich die Höhe und Breite des Bounding-Volumes des Texts, 
    // wenn dieser weiterhin als achsenausgerichtete Box betrachtet wird. 
    // Diese Veränderung der Größen muss berechnet werden und bei dem Setzen 
    // der Größe des Canvas berücksichtigt werden
    divBounding = document.getElementById("wordDimensionDiv1").getBoundingClientRect();
    divOffsetWidth = Math.ceil(divBounding.x);
    divOffsetHeight = Math.ceil(divBounding.y);
    divWidth = document.getElementById("wordDimensionDiv1").offsetWidth;
    divHeight = document.getElementById("wordDimensionDiv1").offsetHeight;

    document.body.removeChild(div);

    // Canvas erzeugen
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');

    // Berechnung der Größe des Canvas
    // Der Text muss vollständig innerhalb des Canvas liegen. 
    // Da es keine native Funktion in Javascript gibt, die diese Größen bestimmt,
    // muss eine Breite und Höhe relativ zur Schriftgröße berechnet werden, die 
    // garantiert das der Text innerhalb des Canvas liegt.
    // divOffsetWidth und divOffsetHeight müssen ebenfalls berücksichtigt werden.
    paddingX = this.style.fontSize - divOffsetWidth;
    paddingY = this.style.fontSize - divOffsetHeight;
    canvasWidth = parseInt(paddingX * 2 + divWidth);
    canvasHeight = parseInt(paddingY * 2 + divHeight);
    ctx.canvas.width = canvasWidth;
    ctx.canvas.height = canvasHeight;

    // Text zeichnen mit Berücksichtigung des Paddings
    font = this.style.fontStyle + " ";
    font += this.style.fontVariant + " ";
    font += this.style.fontWeight + " ";
    font += this.style.fontSize + "px ";
    font += this.style.fontFamily;
    ctx.font = font;
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.rotate(this.angle * Math.PI / 180);
    ctx.translate(-ctx.canvas.width / 2, -ctx.canvas.height / 2);
    ctx.fillText(this.text, paddingX, paddingY);

//    //test
//    document.body.appendChild(canvas);

    // Pixeldaten vom Canvas holen im 32-Bit Array (schneller als 8-Bit)
    imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    data = imageData.data;
    data32 = new Uint32Array(data.buffer);
//    ctx.restore();

    // X-Max
    // Iteration durch das Pixel Array. 
    // Getstartet wird unten rechts in der Ecke vom Canvas
    // Vertikale Iteration
    for (var x = canvasWidth - 1; x > 0 && xMax == null; x--) {
        for (var y = canvasHeight - 1; y > 0 && xMax == null; y--) {
            if (data32[y * canvasWidth + x] !== 0) {
                xMax = x;
                pixelFound = true;
            }
        }
    }

    // X-Min
    // Iteration durch das Pixel Array. 
    // Getstartet wird oben links in der Ecke vom Canvas
    // Vertikale Iteration
    for (var x = 0; x < canvasWidth && xMin == null; x++) {
        for (var y = 0; y < canvasHeight && xMin == null; y++) {
            if (data32[y * canvasWidth + x] !== 0) {
                xMin = x;
                pixelFound = true;
            }
        }
    }

    // Y-Max
    // Iteration durch das Pixel Array. 
    // Getstartet wird oben links in der Ecke vom Canvas
    // Horizontale Iteration
    for (var y = canvasHeight - 1; y > 0 && yMax == null; y--) {
        for (var x = canvasWidth - 1; x > 0 && yMax == null; x--) {
            if (data32[y * canvasWidth + x] !== 0) {
                yMax = y;
                pixelFound = true;
            }
        }
    }

    // Y-Min   
    // Iteration durch das Pixel Array. 
    // Getstartet wird unten rechts in der Ecke vom Canvas
    // Horizontale Iteration
    for (var y = 0; y < canvasHeight && yMin == null; y++) {
        for (var x = 0; x < canvasWidth && yMin == null; x++) {
            if (data32[y * canvasWidth + x] !== 0) {
                yMin = y;
                pixelFound = true;
            }
        }
    }

    // Ankerpunkt bestimmen für das Zeichnen des Texts
    offsetX = paddingX - xMin;
    offsetY = paddingY - yMin;
//    offsetX = xMin - paddingX;
//    offsetY = yMin - paddingY;

    // Tatsächliche Breite und Höhe für den Canvas bestimmen
    newCanvasWidth = xMax - xMin;
    newCanvasHeight = yMax - yMin;

    // Pixeldaten neu berechnen
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.canvas.width = newCanvasWidth;
    ctx.canvas.height = newCanvasHeight;
    ctx.putImageData(imageData, -xMin, -yMin);
    newImageData = ctx.getImageData(0, 0, newCanvasWidth, newCanvasHeight);

    // Metriken setzen
    this.width = newCanvasWidth;
    this.height = newCanvasHeight;
    this.anchorOffsetX = offsetX;
    this.anchorOffsetY = offsetY;
    this.rotationAnchorX = divWidth / 2;
    this.rotationAnchorY = divHeight / 2;
    this.imageData = newImageData;
    this.imageData32 = new Uint32Array(newImageData.data.buffer);

    // Bounding-Volume-Hirarchie berechnen
    this.boundingVolume = new WordcloudJS.boundingVolume({
        word: this,
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
    });

};    

WordcloudJS.word.prototype = {
    hasPixelsInBox: function (sx, sy, width, height) {
        for (var y = sy; y < sy + height; y++) {
            for (var x = sx; x < sx + width; x++) {
                if (this.imageData32[y * this.width + x] !== 0) {
                    return true;
                }
            }
        }
        return false;
    },
    move: function (x, y) {
        this.position.x = x;
        this.position.y = y;
    },
    getMinMax: function () {
        return{
            minX: this.position.x,
            maxX: this.position.x + this.width,
            minY: this.position.y,
            maxY: this.position.y + this.height
        };
    },
    /**
     * <strong>drawWordOnCanvas</strong>
     * <br>Erzeugt ein Canvas und zeichnet das Wort. 
     * <br>Die Position des Worts wird nicht berücksichtigt. Optional kann die
     * <br>Bounding-Volume-Hierarchie ebenfalls gezeichnet werden.
     * <br>
     * @param {object} drawBoundingVolume
     * <br>drawBoundingVolume: {
     * <br>&emsp;    color: '#000000' {string}, Color-Hex-Code
     * <br>&emsp;    fill: {boolean},
     * <br>&emsp;    drawOption: 'filled'|'all'|'empty' {string},
     * <br>}
     * @returns {object} Canvas Element
     */
    drawWordOnCanvas: function (drawBoundingVolume) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        ctx.canvas.width = this.width;
        ctx.canvas.height = this.height;
        ctx.putImageData(this.imageData, 0, 0);
        if (drawBoundingVolume != null) {
            var color = "#FF0000";
            var fill = false;
            var drawOption = 'filled';

            if (drawBoundingVolume.color != null) {
                color = drawBoundingVolume.color;
            }

            if (drawBoundingVolume.fill != null) {
                fill = drawBoundingVolume.fill;
            }

            if (drawBoundingVolume.drawOption != null) {
                drawOption = drawBoundingVolume.drawOption;
            }

            this.boundingVolume.traverse(function (boundingVolume, param) {
                boundingVolume.drawBoundingVolume(param.ctx, param.color, param.fill, param.drawOption);
            }, {
                ctx: ctx,
                color: color,
                fill: fill,
                drawOption: drawOption
            });
        }
        return canvas;
    }
};

/**
 * <strong>WordcloudJS.boundingVolume</strong>
 * Berechnet rekursiv eine zweidimensionale Bounding-Volume-Hirarchie anhand 
 * eines Wortes und dessen Pixeldaten.
 * @constructor
 * <br>
 * @param {type} option Objekt mit Optionen
 * <br>
 * <br>     word: object
 * <br>     x: number            x-Position des Bounding-Volumes 
 * <br>     y: number            y-Position des Bounding-Volumes 
 * <br>     width: number        Breite des Bounding-Volumes
 * <br>     height: number       Höhe des Bounding-Volumes
 * <br>}
 * @returns {object}    WordcloudJS.boundingVolume
 */
WordcloudJS.boundingVolume = function (option) {
    this.word = option.word;
    this.x = option.x;
    this.y = option.y;
    this.width = option.width;
    this.height = option.height;
    this.children = [];
    // Prüfen, ob Pixel im Bereich sind
    this.isFilled = option.word.hasPixelsInBox(this.x, this.y, this.width, this.height);

    // Berechnung der neuen Bereiche für die Kind-Obbjekte
    var newWidth1 = Math.ceil(option.width / 2);
    var newWidth2 = option.width - newWidth1;
    var newHeight1 = Math.ceil(option.height / 2);
    var newHeight2 = option.height - newHeight1;

    // Prüfen ob eine vertikale oder horizontale Teilung des Bereichs in der Mitte
    // stattfinden soll für die Kind-Objekte. Dadurch ist gewährleistet, dass die 
    // Bounding-Volumes nahezu gleichgroß sind. Dies verbessert die Pixelpositionsabfrage.
    if (this.isFilled && newWidth1 >= option.word.boundingVolumeMinSize && this.width >= this.height) {

        this.children.push(new WordcloudJS.boundingVolume({
            word: option.word,
            x: this.x,
            y: this.y,
            width: newWidth1,
            height: this.height
        }));

        this.children.push(new WordcloudJS.boundingVolume({
            word: option.word,
            x: this.x + newWidth1,
            y: this.y,
            width: newWidth2,
            height: this.height
        }));

    } else if (this.isFilled && newHeight1 >= option.word.boundingVolumeMinSize && this.width < this.height) {

        this.children.push(new WordcloudJS.boundingVolume({
            word: option.word,
            x: this.x,
            y: this.y,
            width: this.width,
            height: newHeight1
        }));

        this.children.push(new WordcloudJS.boundingVolume({
            word: option.word,
            x: this.x,
            y: this.y + newHeight1,
            width: this.width,
            height: newHeight2
        }));
    }
};

WordcloudJS.boundingVolume.prototype = {
    hasChildren: function () {
        return this.children.length > 0 ? true : false;
    },
    traverse: function (func, param) {
        func(this, param);

        for (var i = 0; i < this.children.length; i++) {
            if (param != null && param.exit) {
                return;
            }
            this.children[i].traverse(func, param);
        }
    },
    drawBoundingVolume: function (ctx, color, fill, drawOption) {
        var draw = false;
        if (drawOption === "all" && !this.hasChildren()) {
            draw = true;
        } else if (drawOption === "empty" && !this.hasChildren() && !this.isFilled) {
            draw = true;
        } else if (drawOption === "filled" && !this.hasChildren() && this.isFilled) {
            draw = true;
        }

        if (fill && draw) {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        } else if (draw) {
            ctx.strokeStyle = color;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
};

WordcloudJS.testPerformancePixelData32And8 = function (canvasWidth, canvasHeight, data) {
    var t0 = performance.now();
    for (var y = 0; y < canvasHeight; y++) {
        for (var x = 0; x < canvasWidth; x++) {
            if (data[(y * canvasWidth + x) + 4] !== 0) {
                var t1 = performance.now();
                console.log("getYMax8 Ausführzeit: " + (t1 - t0) + " milliseconds");
                return y;
            }
        }
    }
};

WordcloudJS.stopwords = {
    "german": ["ab", "aber", "ach", "acht", "achte", "achten", "achter", "achtes", "ag", "alle", "allein", "allem", "allen", "aller", "allerdings", "alles", "allgemeinen", "als", "also", "am", "an", "ander", "andere", "anderem", "anderen", "anderer", "anderes", "anderm", "andern", "anderr", "anders", "au", "auch", "auf", "aus", "ausser", "ausserdem", "außer", "außerdem", "bald", "bei", "beide", "beiden", "beim", "beispiel", "bekannt", "bereits", "besonders", "besser", "besten", "bin", "bis", "bisher", "bist", "d.h", "da", "dabei", "dadurch", "dafür", "dagegen", "daher", "dahin", "dahinter", "damals", "damit", "danach", "daneben", "dank", "dann", "daran", "darauf", "daraus", "darf", "darfst", "darin", "darum", "darunter", "darüber", "das", "dasein", "daselbst", "dass", "dasselbe", "davon", "davor", "dazu", "dazwischen", "daß", "dein", "deine", "deinem", "deinen", "deiner", "deines", "dem", "dementsprechend", "demgegenüber", "demgemäss", "demgemäß", "demselben", "demzufolge", "den", "denen", "denn", "denselben", "der", "deren", "derer", "derjenige", "derjenigen", "dermassen", "dermaßen", "derselbe", "derselben", "des", "deshalb", "desselben", "dessen", "deswegen", "dich", "die", "diejenige", "diejenigen", "dies", "diese", "dieselbe", "dieselben", "diesem", "diesen", "dieser", "dieses", "dir", "doch", "dort", "drei", "drin", "dritte", "dritten", "dritter", "drittes", "du", "durch", "durchaus", "durfte", "durften", "dürfen", "dürft", "eben", "ebenso", "ehrlich", "ei", "ei,", "eigen", "eigene", "eigenen", "eigener", "eigenes", "ein", "einander", "eine", "einem", "einen", "einer", "eines", "einig", "einige", "einigem", "einigen", "einiger", "einiges", "einmal", "eins", "elf", "en", "ende", "endlich", "entweder", "er", "ernst", "erst", "erste", "ersten", "erster", "erstes", "es", "etwa", "etwas", "euch", "euer", "eure", "eurem", "euren", "eurer", "eures", "folgende", "früher", "fünf", "fünfte", "fünften", "fünfter", "fünftes", "für", "gab", "ganz", "ganze", "ganzen", "ganzer", "ganzes", "gar", "gedurft", "gegen", "gegenüber", "gehabt", "gehen", "geht", "gekannt", "gekonnt", "gemacht", "gemocht", "gemusst", "genug", "gerade", "gern", "gesagt", "geschweige", "gewesen", "gewollt", "geworden", "gibt", "ging", "gleich", "gott", "gross", "grosse", "grossen", "grosser", "grosses", "groß", "große", "großen", "großer", "großes", "gut", "gute", "guter", "gutes", "hab", "habe", "haben", "habt", "hast", "hat", "hatte", "hatten", "hattest", "hattet", "heisst", "her", "heute", "hier", "hin", "hinter", "hoch", "hätte", "hätten", "i", "ich", "ihm", "ihn", "ihnen", "ihr", "ihre", "ihrem", "ihren", "ihrer", "ihres", "im", "immer", "in", "indem", "infolgedessen", "ins", "irgend", "ist", "ja", "jahr", "jahre", "jahren", "je", "jede", "jedem", "jeden", "jeder", "jedermann", "jedermanns", "jedes", "jedoch", "jemand", "jemandem", "jemanden", "jene", "jenem", "jenen", "jener", "jenes", "jetzt", "kam", "kann", "kannst", "kaum", "kein", "keine", "keinem", "keinen", "keiner", "keines", "kleine", "kleinen", "kleiner", "kleines", "kommen", "kommt", "konnte", "konnten", "kurz", "können", "könnt", "könnte", "lang", "lange", "leicht", "leide", "lieber", "los", "machen", "macht", "machte", "mag", "magst", "mahn", "mal", "man", "manche", "manchem", "manchen", "mancher", "manches", "mann", "mehr", "mein", "meine", "meinem", "meinen", "meiner", "meines", "mensch", "menschen", "mich", "mir", "mit", "mittel", "mochte", "mochten", "morgen", "muss", "musst", "musste", "mussten", "muß", "mußt", "möchte", "mögen", "möglich", "mögt", "müssen", "müsst", "müßt", "na", "nach", "nachdem", "nahm", "natürlich", "neben", "nein", "neue", "neuen", "neun", "neunte", "neunten", "neunter", "neuntes", "nicht", "nichts", "nie", "niemand", "niemandem", "niemanden", "noch", "nun", "nur", "ob", "oben", "oder", "offen", "oft", "ohne", "ordnung", "per", "recht", "rechte", "rechten", "rechter", "rechtes", "richtig", "rund", "sa", "sache", "sagt", "sagte", "sah", "satt", "schlecht", "schluss", "schon", "sechs", "sechste", "sechsten", "sechster", "sechstes", "sehr", "sei", "seid", "seien", "sein", "seine", "seinem", "seinen", "seiner", "seines", "seit", "seitdem", "selbst", "sich", "sie", "sieben", "siebente", "siebenten", "siebenter", "siebentes", "sind", "so", "solang", "solche", "solchem", "solchen", "solcher", "solches", "soll", "sollen", "sollst", "sollt", "sollte", "sollten", "sondern", "sonst", "soweit", "sowie", "später", "startseite", "statt", "steht", "suche", "tag", "tage", "tagen", "tat", "teil", "tel", "tritt", "trotzdem", "tun", "uhr", "um", "und", "und?", "uns", "unse", "unsem", "unsen", "unser", "unsere", "unserer", "unses", "unter", "vergangenen", "viel", "viele", "vielem", "vielen", "vielleicht", "vier", "vierte", "vierten", "vierter", "viertes", "vom", "von", "vor", "wahr?", "wann", "war", "waren", "warst", "wart", "warum", "was", "weg", "wegen", "weil", "weit", "weiter", "weitere", "weiteren", "weiteres", "welche", "welchem", "welchen", "welcher", "welches", "wem", "wen", "wenig", "wenige", "weniger", "weniges", "wenigstens", "wenn", "wer", "werde", "werden", "werdet", "weshalb", "wessen", "wie", "wieder", "wieso", "will", "willst", "wir", "wird", "wirklich", "wirst", "wissen", "wo", "woher", "wohin", "wohl", "wollen", "wollt", "wollte", "wollten", "worden", "wurde", "wurden", "während", "währenddem", "währenddessen", "wäre", "würde", "würden", "z.b", "zehn", "zehnte", "zehnten", "zehnter", "zehntes", "zeit", "zu", "zuerst", "zugleich", "zum", "zunächst", "zur", "zurück", "zusammen", "zwanzig", "zwar", "zwei", "zweite", "zweiten", "zweiter", "zweites", "zwischen", "zwölf", "über", "überhaupt", "übrigens"],
    "english": [
        'a',
        'able',
        'about',
        'above',
        'abroad',
        'according',
        'accordingly',
        'across',
        'actually',
        'adj',
        'after',
        'afterwards',
        'again',
        'against',
        'ago',
        'ahead',
        'aint',
        'all',
        'allow',
        'allows',
        'almost',
        'alone',
        'along',
        'alongside',
        'already',
        'also',
        'although',
        'always',
        'am',
        'amid',
        'amidst',
        'among',
        'amongst',
        'an',
        'and',
        'another',
        'any',
        'anybody',
        'anyhow',
        'anyone',
        'anything',
        'anyway',
        'anyways',
        'anywhere',
        'apart',
        'appear',
        'appreciate',
        'appropriate',
        'are',
        'arent',
        'around',
        'as',
        'as',
        'aside',
        'ask',
        'asking',
        'associated',
        'at',
        'available',
        'away',
        'awfully',
        'b',
        'back',
        'backward',
        'backwards',
        'be',
        'became',
        'because',
        'become',
        'becomes',
        'becoming',
        'been',
        'before',
        'beforehand',
        'begin',
        'behind',
        'being',
        'believe',
        'below',
        'beside',
        'besides',
        'best',
        'better',
        'between',
        'beyond',
        'both',
        'brief',
        'but',
        'by',
        'c',
        'came',
        'can',
        'cannot',
        'cant',
        'cant',
        'caption',
        'cause',
        'causes',
        'certain',
        'certainly',
        'changes',
        'clearly',
        'cmon',
        'co',
        'co.',
        'com',
        'come',
        'comes',
        'concerning',
        'consequently',
        'consider',
        'considering',
        'contain',
        'containing',
        'contains',
        'corresponding',
        'could',
        'couldnt',
        'course',
        'cs',
        'currently',
        'd',
        'dare',
        'darent',
        'definitely',
        'described',
        'despite',
        'did',
        'didnt',
        'different',
        'directly',
        'do',
        'does',
        'doesnt',
        'doing',
        'done',
        'dont',
        'down',
        'downwards',
        'during',
        'e',
        'each',
        'edu',
        'eg',
        'eight',
        'eighty',
        'either',
        'else',
        'elsewhere',
        'end',
        'ending',
        'enough',
        'entirely',
        'especially',
        'et',
        'etc',
        'even',
        'ever',
        'evermore',
        'every',
        'everybody',
        'everyone',
        'everything',
        'everywhere',
        'ex',
        'exactly',
        'example',
        'except',
        'f',
        'fairly',
        'far',
        'farther',
        'few',
        'fewer',
        'fifth',
        'first',
        'five',
        'followed',
        'following',
        'follows',
        'for',
        'forever',
        'former',
        'formerly',
        'forth',
        'forward',
        'found',
        'four',
        'from',
        'further',
        'furthermore',
        'g',
        'get',
        'gets',
        'getting',
        'given',
        'gives',
        'go',
        'goes',
        'going',
        'gone',
        'got',
        'gotten',
        'greetings',
        'h',
        'had',
        'hadnt',
        'half',
        'happens',
        'hardly',
        'has',
        'hasnt',
        'have',
        'havent',
        'having',
        'he',
        'hed',
        'hell',
        'hello',
        'help',
        'hence',
        'her',
        'here',
        'hereafter',
        'hereby',
        'herein',
        'heres',
        'hereupon',
        'hers',
        'herself',
        'hes',
        'hi',
        'him',
        'himself',
        'his',
        'hither',
        'hopefully',
        'how',
        'howbeit',
        'however',
        'hundred',
        'i',
        'id',
        'ie',
        'if',
        'ignored',
        'ill',
        'im',
        'immediate',
        'in',
        'inasmuch',
        'inc',
        'inc.',
        'indeed',
        'indicate',
        'indicated',
        'indicates',
        'inner',
        'inside',
        'insofar',
        'instead',
        'into',
        'inward',
        'is',
        'isnt',
        'it',
        'itd',
        'itll',
        'its',
        'its',
        'itself',
        'ive',
        'j',
        'just',
        'k',
        'keep',
        'keeps',
        'kept',
        'know',
        'known',
        'knows',
        'l',
        'last',
        'lately',
        'later',
        'latter',
        'latterly',
        'least',
        'less',
        'lest',
        'let',
        'lets',
        'like',
        'liked',
        'likely',
        'likewise',
        'little',
        'look',
        'looking',
        'looks',
        'low',
        'lower',
        'ltd',
        'm',
        'made',
        'mainly',
        'make',
        'makes',
        'many',
        'may',
        'maybe',
        'maynt',
        'me',
        'mean',
        'meantime',
        'meanwhile',
        'merely',
        'might',
        'mightnt',
        'mine',
        'minus',
        'miss',
        'more',
        'moreover',
        'most',
        'mostly',
        'mr',
        'mrs',
        'much',
        'must',
        'mustnt',
        'my',
        'myself',
        'n',
        'name',
        'namely',
        'nd',
        'near',
        'nearly',
        'necessary',
        'need',
        'neednt',
        'needs',
        'neither',
        'never',
        'neverf',
        'neverless',
        'nevertheless',
        'new',
        'next',
        'nine',
        'ninety',
        'no',
        'nobody',
        'non',
        'none',
        'nonetheless',
        'noone',
        'no-one',
        'nor',
        'normally',
        'not',
        'nothing',
        'notwithstanding',
        'novel',
        'now',
        'nowhere',
        'o',
        'obviously',
        'of',
        'off',
        'often',
        'oh',
        'ok',
        'okay',
        'old',
        'on',
        'once',
        'one',
        'ones',
        'ones',
        'only',
        'onto',
        'opposite',
        'or',
        'other',
        'others',
        'otherwise',
        'ought',
        'oughtnt',
        'our',
        'ours',
        'ourselves',
        'out',
        'outside',
        'over',
        'overall',
        'own',
        'p',
        'particular',
        'particularly',
        'past',
        'per',
        'perhaps',
        'placed',
        'please',
        'plus',
        'possible',
        'presumably',
        'probably',
        'provided',
        'provides',
        'q',
        'que',
        'quite',
        'qv',
        'r',
        'rather',
        'rd',
        're',
        'really',
        'reasonably',
        'recent',
        'recently',
        'regarding',
        'regardless',
        'regards',
        'relatively',
        'respectively',
        'right',
        'round',
        's',
        'said',
        'same',
        'saw',
        'say',
        'saying',
        'says',
        'second',
        'secondly',
        'see',
        'seeing',
        'seem',
        'seemed',
        'seeming',
        'seems',
        'seen',
        'self',
        'selves',
        'sensible',
        'sent',
        'serious',
        'seriously',
        'seven',
        'several',
        'shall',
        'shant',
        'she',
        'shed',
        'shell',
        'shes',
        'should',
        'shouldnt',
        'since',
        'six',
        'so',
        'some',
        'somebody',
        'someday',
        'somehow',
        'someone',
        'something',
        'sometime',
        'sometimes',
        'somewhat',
        'somewhere',
        'soon',
        'sorry',
        'specified',
        'specify',
        'specifying',
        'still',
        'sub',
        'such',
        'sup',
        'sure',
        't',
        'take',
        'taken',
        'taking',
        'tell',
        'tends',
        'th',
        'than',
        'thank',
        'thanks',
        'thanx',
        'that',
        'thatll',
        'thats',
        'thats',
        'thatve',
        'the',
        'their',
        'theirs',
        'them',
        'themselves',
        'then',
        'thence',
        'there',
        'thereafter',
        'thereby',
        'thered',
        'therefore',
        'therein',
        'therell',
        'therere',
        'theres',
        'theres',
        'thereupon',
        'thereve',
        'these',
        'they',
        'theyd',
        'theyll',
        'theyre',
        'theyve',
        'thing',
        'things',
        'think',
        'third',
        'thirty',
        'this',
        'thorough',
        'thoroughly',
        'those',
        'though',
        'three',
        'through',
        'throughout',
        'thru',
        'thus',
        'till',
        'to',
        'together',
        'too',
        'took',
        'toward',
        'towards',
        'tried',
        'tries',
        'truly',
        'try',
        'trying',
        'ts',
        'twice',
        'two',
        'u',
        'un',
        'under',
        'underneath',
        'undoing',
        'unfortunately',
        'unless',
        'unlike',
        'unlikely',
        'until',
        'unto',
        'up',
        'upon',
        'upwards',
        'us',
        'use',
        'used',
        'useful',
        'uses',
        'using',
        'usually',
        'v',
        'value',
        'various',
        'versus',
        'very',
        'via',
        'viz',
        'vs',
        'w',
        'want',
        'wants',
        'was',
        'wasnt',
        'way',
        'we',
        'wed',
        'welcome',
        'well',
        'well',
        'went',
        'were',
        'were',
        'werent',
        'weve',
        'what',
        'whatever',
        'whatll',
        'whats',
        'whatve',
        'when',
        'whence',
        'whenever',
        'where',
        'whereafter',
        'whereas',
        'whereby',
        'wherein',
        'wheres',
        'whereupon',
        'wherever',
        'whether',
        'which',
        'whichever',
        'while',
        'whilst',
        'whither',
        'who',
        'whod',
        'whoever',
        'whole',
        'wholl',
        'whom',
        'whomever',
        'whos',
        'whose',
        'why',
        'will',
        'willing',
        'wish',
        'with',
        'within',
        'without',
        'wonder',
        'wont',
        'would',
        'wouldnt',
        'x',
        'y',
        'yes',
        'yet',
        'you',
        'youd',
        'youll',
        'your',
        'youre',
        'yours',
        'yourself',
        'yourselves',
        'youve',
        'z',
        'zero'
    ]
};

