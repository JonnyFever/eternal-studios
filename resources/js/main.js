$(document).ready(() => {
  $('#nav-toggle').on('click', function(event){
    event.preventDefault();
    $('.dropdown-content').slideToggle();
    $(this).toggleClass('active');
  });

  $('#nav-links a').on('click', function(event){ 
    event.preventDefault();
    var navHeight = $('nav').height();
    var id = $(this).attr('href');
    var originalScrollCoordinate = $(id).offset().top; /* Gives top coordinate of the ID'd element we scroll to */
    var newScrollCoordinate = originalScrollCoordinate - navHeight;
    $('html').animate({
      scrollTop: newScrollCoordinate
    });
  });

  /* Home Logo Scroll Animation */
  $("a[href='index.html']").click(function() {
    $("html, body").animate({
      scrollTop: 0 }, "slow"
    );
    return false;
  });

  /* Logo Rotation jQuery */
  var angle = 0;
  setInterval(function(){
    angle+=3;
  $("#drp-image").rotate(angle);
  },50);
});
