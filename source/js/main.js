$('.slider-programm').slick({
    autoplay: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    sliderToScroll: 1,
    arrows: true
});

 $(".watch__btn").click(function () {
      $(".popup").slideToggle("slow");
 });

 $(".popup").on('click', function (e) {
    if (e.target == this) $(".popup").fadeOut('fast');
})

// open modal
var wrap = $('#wrapper'),
     btn = $('.open-modal-btn'),
     modal = $('.cover, .modal, .content');

btn.on('click', function() {
  modal.fadeIn();
});

// close modal
$('.modal').click(function() {
  wrap.on('click', function(event) {
    var select = $('.content');
    if ($(event.target).closest(select).length)
      return;
    modal.fadeOut();
    wrap.unbind('click');
  });
});