document.getElementById("time").addEventListener("focus", function (event) {
    event.target.type = "time";
});
document.getElementById("time").addEventListener("blur", function (event) {
    event.target.type = "text";
    if (!event.target.value) {
        event.target.placeholder = "Timing";
    }
});

document.getElementById("date").addEventListener("focus", function (event) {
    event.target.type = "date";
});
document.getElementById("date").addEventListener("blur", function (event) {
    event.target.type = "text";
    if (!event.target.value) {
        event.target.placeholder = "Date";
    }
});

$('.popular__card-wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: Boolean,
    autoplaySpeed: 1000,
    dots: true,
    lazyLoad: String
});


$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    console.log($(".header__nav").length);
    if (scroll >= 250) {
        $(".header__nav").addClass("fixed");
    } else {
        $(".header__nav").removeClass("fixed");
    }
});


function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var link = document.querySelector("#scroll");
link.addEventListener("click", function (event) {
    event.preventDefault();
    var target = link.getAttribute("href");
    smoothScroll(target, 1500);
});