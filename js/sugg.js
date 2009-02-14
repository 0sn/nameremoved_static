$(document).ready(function(){
    $("#suggester a").click(function(e){
        $(this).append('<br><span id="#spin"><img src="http://static.nameremoved.com/pix/spinner.gif"></span>');
        return false;
    });
});