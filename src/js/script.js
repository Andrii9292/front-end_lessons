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

const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('#menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('show');
});