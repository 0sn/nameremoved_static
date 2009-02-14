document.write('<style>#main .box .nav {display:none;}</style>');

$(document).ready(function(){
    $("#main .box .nav").wrap('<p class="toggler">');
    $(".toggler").prepend("<span>Show/hide the list of comics in this storyline...</span>");
/*  $("#main .box .nav").toggle(); */
    $(".toggler").css("cursor","pointer");
    
    $("#main .box .toggler").each(function(i){
        $(this).click(function(){
            $(this).children("ul").slideToggle("slow");
        });
    });
});