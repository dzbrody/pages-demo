$(document).ready(function () {
    $(this).css('click', function () {
        $(this).css("color", "red");
    });

    $("body").on('click', function () {
        $(this).css("background-color", "white");
    });
});