function do_suggest () {
    $.ajax({
        type: "POST",
        url: "/contribute/submitjs/",
        data: $("#contribform").serialize(),
        success: function(data, status) {
            $("#suggester").html(data);
            $("#contribformsubmit").click(do_suggest);
        }
    });
    return false;
}
$(document).ready(function(){
    $("#suggester a").click(function(e){
        $(this).append('<br><span id="#spin"><img src="http://static.nameremoved.com/pix/spinner.gif"></span>');
        $("#suggester").load('/contribute/submitjs/', function(){
            $("#contribformsubmit").click(do_suggest);
            $("#id_aka").focus();
        });
        return false;
    });
});