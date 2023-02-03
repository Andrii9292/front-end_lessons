$(document).ready(function () {
    $('.team').slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        adaptiveHeight: true
    });
});


$(document).ready(function () {
    $("#link-color3").addClass("color-red");
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


$(document).ready(function () {
    $("#experience-text1").addClass("block");
});

$("#experience-link1").click(function () {
    $("#experience-text1").addClass("block");
    $("#experience-text2, #experience-text3, #experience-text4").removeClass("block");
});
$("#experience-link2").click(function () {
    $("#experience-text2").addClass("block");
    $("#experience-text1, #experience-text3, #experience-text4").removeClass("block");
});
$("#experience-link3").click(function () {
    $("#experience-text3").addClass("block");
    $("#experience-text2, #experience-text1, #experience-text4").removeClass("block");
});
$("#experience-link4").click(function () {
    $("#experience-text4").addClass("block");
    $("#experience-text2, #experience-text3, #experience-text1").removeClass("block");
});


$(document).ready(function () {
    $("#experience-link1").addClass("color");
});

$("#experience-link1").click(function () {
    $(this).addClass("color");
    $("#experience-link2, #experience-link3, #experience-link4").removeClass("color");
});
$("#experience-link2").click(function () {
    $(this).addClass("color");
    $("#experience-link1, #experience-link3, #experience-link4").removeClass("color");
});
$("#experience-link3").click(function () {
    $(this).addClass("color");
    $("#experience-link1, #experience-link2, #experience-link4").removeClass("color");
});
$("#experience-link4").click(function () {
    $(this).addClass("color");
    $("#experience-link1, #experience-link2, #experience-link3").removeClass("color");
});


$('#experience-on').on('click', function (event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
});

var count = 0;
setInterval(function () {
    var maxCount = 10;
    if (count < maxCount) {
        count++;
        document.getElementById("visitors").innerHTML = count;
    } else {
        document.getElementById("visitors").innerHTML = "10+";
    }
}, 1000);

var count = 0;
setInterval(function () {
    var maxCount = 30;
    if (count < maxCount) {
        count++;
        document.getElementById("activ-clients").innerHTML = count;
    } else {
        document.getElementById("activ-clients").innerHTML = "30+";
    }
}, 200);

var count = 0;
setInterval(function () {
    var maxCount = 500;
    if (count < maxCount) {
        count++;
        document.getElementById("hour").innerHTML = count;
    } else {
        document.getElementById("hour").innerHTML = "500+";
    }
}, 20);
