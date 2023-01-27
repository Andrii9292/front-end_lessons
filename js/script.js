$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    items:2,
    loop:true,
    nav: Boolean,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
  });
});


$(document).ready(function(){
  $('.my-class').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
  });
});


lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'fitImagesInViewport': true,
  'imageFadeDuration': 200,
  'positionFromTop': 50,
  'resizeDuration': 200,
  'showImageNumberLabel': false,
  'wrapAround': true,
  'disableScrolling': true,
})


$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 200,
  gutter: 20
});
