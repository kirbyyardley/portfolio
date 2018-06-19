$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
      /* Hides loading window when pages finishes loading */
        $('html, body').addClass( "loading" );
        setTimeout(function(){
          $('body').addClass( "loaded" );
          $('html, body').removeClass( "loading" );
        }, 4000);
        localStorage.setItem('popState','shown')
    }
    $('.c-loading__modal').css('display', 'none');
});

$( document ).ready(function() {

  // /* Sections to match viewport height to 50% */
  // $('.o-height--half').css('height', window.innerHeight*.50+'px');
  // $(window).resize(function() {
  //   $('.o-height--half').css('height', window.innerHeight*.50+'px');
  // });
  //
  // /* Sections to match viewport height to 100% */
  // $('.o-height--full').css('height', window.innerHeight+'px');
  // $(window).resize(function() {
  //   $('.o-height--full').css('height', window.innerHeight+'px');
  // });

  (function($) {
      var $window = $(window),
          $body = $('body');

      $window.resize(function resize(){
          if ($window.width() > 980) {
              return $body.addClass('menu-is-open');
          }

          $body.removeClass('menu-is-open');
      }).trigger('resize');
  })(jQuery);

  /* Navigation */
  $('.c-menu, .c-nav__overlay, .c-nav__item').on('click', function(){
    if ($('body').hasClass('menu-is-open')) {
      $('.c-menu').removeClass('is-active');
    	$('body').removeClass('menu-is-open');
      $('body, html').removeClass('loading');
    } else {
      $('.c-menu').addClass('is-active');
    	$('body').addClass('menu-is-open');
      $('body, html').addClass('loading');
    }
  });

});



$(document).ready(function(){
    resizeContent();

    $(window).resize(function() {
        resizeContent();
    });
});

function resizeContent() {
    $height = $(window).height();
    $('body div.c-nav__list-container').height($height);
}
