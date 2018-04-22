wc = new WordcloudJS();

$(document).ready(function () {
    $("#scene").css("background-color", "#ffffff");
    $("#canvasWrapper").css("margin-top", "100px");

    $("#btn_back").click(function () {
        window.location = "index.html";
    });

    // Controller
    $("#value_minsize").html($("#input_minsize").val());

    $("#input_minsize").mousemove(function () {
        build();
        $("#value_minsize").html($("#input_minsize").val());
    });

    $("#input_option").mousemove(function () {
        build();
        var val = parseInt($("#input_option").val());
        if (val == 0) {
            $("#value_option").html("all");
        } else if (val == 1) {
            $("#value_option").html("empty");
        } else if (val == 2) {
            $("#value_option").html("filled");
        }
    });

    $("#input_fill").change(function () {
        build();
    });

    build();
});

function build() {
    $("#canvasWrapper canvas").remove();
    var text = "WordCloud";
    var fontSize = 200;
    var boundingVolumeMinSize = parseInt($("#input_minsize").val());
    var bvColor = "#ff0000";
    var bvFill = $("#input_fill").prop("checked");
    var bvDrawOption = "all";
    var val = parseInt($("#input_option").val());
    if (val == 0) {
        bvDrawOption = "all";
    } else if (val == 1) {
        bvDrawOption = "empty";
    } else if (val == 2) {
        bvDrawOption = "filled";
    }
    var word = new wc.createWord({
        text: text,
        boundingVolumeMinSize: boundingVolumeMinSize,
        style: {
            fontSize: fontSize,
            fontFamily: "Arial"
        }
    });
    var canvas = word.drawWordOnCanvas({
        color: bvColor,
        fill: bvFill,
        drawOption: bvDrawOption
    });
    $("#canvasWrapper").append(canvas);

}