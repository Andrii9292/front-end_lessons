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

$(document).ready(function (){
    $('#touch').on('click',function(){
        $('#menu-list').addClass('active');
    });
});
$(document).ready(function (){
    $('#touch1').on('click',function(){
        $('#menu-list1').addClass('active');
    });
});