function enable_jump () {
    $("#goto").click(function(e){
        window.location = $.cookie("bookmark")
    });
    $("#goto").removeClass("disabled");
    $("#goto").addClass("enabled");
};

function enable_clear () {
    $("#cleartag").click(function(e){
        $.cookie("bookmark",null,{ expires: 600, path: '/'});
        disable_jump();
        disable_clear();
    });
    $("#cleartag").removeClass("disabled");
    $("#cleartag").addClass("enabled");
};

function disable_jump () {
    $("#goto").unbind('click');
    $("#goto").removeClass("enabled");
    $("#goto").addClass("disabled");
}

function disable_clear() {
    $("#cleartag").unbind('click');
    $("#cleartag").removeClass("enabled");
    $("#cleartag").addClass("disabled");
}

$(document).ready(function(){
    $("#bookmarknav").html('<ul class="nav"><li><a id="tag">Tag this comic</a></li><li><a id="goto">Jump to tagged comic</a></li><li><a id="cleartag">Clear tagged comic</a></li></ul>');
    $("#tag").addClass("enabled");
    $("#tag").click(function(e){
        $.cookie("bookmark", window.location, { expires: 600, path: '/'});
        $(this).effect("pulsate", {times: 1}, 200);
        enable_clear();
        enable_jump();
    });
    if ($.cookie("bookmark") != null) {
        enable_jump();
        enable_clear();
    } else {
        disable_jump();
        disable_clear();
    }
});