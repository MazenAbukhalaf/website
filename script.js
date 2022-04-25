window.onload = function() {
    document.body.className += " loaded";
}

$(function() {
    $("#visible").click(function() {
        $('#invisible').toggleClass("show");
    });
});