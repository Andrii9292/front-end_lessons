$(document).ready(function () {
    $('.team').slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        adaptiveHeight: true
    });
});

$(document).ready(function () {
    $("#link-color").addClass("color-red");
});

$("#link-color").click(function () {
    $(this).addClass("color-red");
    $("#link-color2, #link-color3").removeClass("color-red");
});
$("#link-color2").click(function () {
    $(this).addClass("color-red");
    $("#link-color, #link-color3").removeClass("color-red");
});
$("#link-color3").click(function () {
    $(this).addClass("color-red");
    $("#link-color, #link-color2").removeClass("color-red");
});