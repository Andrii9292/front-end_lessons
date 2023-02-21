$('.navi li').mouseenter(function () {
    var changeImage = $(this).attr('data-image')
    $('.photo').css({
        'background-image': 'url(' + changeImage + ')'
    })
})
$('.navi li').mouseleave(function () {
    $('.photo').css({
        'background-image': ''
    })
})

$(document).ready(function () {
    $("topNav").mobiMenu({
        slideUpTimeOut: 200,
        slideDownTimeOut: 500
    });
});

$(document).ready(function () {
    $('#click').click(function () {
        $('#menu-list').toggleClass('active');
    });

    $(document).click(function (event) {
        var menu = $('#menu-list');
        var menuToggle = $('#click');
        if (!menu.is(event.target) && !menuToggle.is(event.target) && menu.has(event.target).length === 0) {
            menu.removeClass('active');
        }
    });

    $('.has-sub').click(function (event) {
        event.stopPropagation();
        $(this).children('ul').toggleClass('active');
        $(this).siblings().find('ul').removeClass('active');
    });
});
