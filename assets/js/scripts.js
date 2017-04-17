$( document ).ready(function() {

/* Sections to match viewport height to 50% */
  $('.o-height--half').css('height', window.innerHeight*.70+'px');
  $(window).resize(function() {
    $('.o-height--half').css('height', window.innerHeight*.70+'px');
  });

  /* Sections to match viewport height to 50% */
    $('.o-height--full').css('height', window.innerHeight+'px');
    $(window).resize(function() {
      $('.o-height--full').css('height', window.innerHeight+'px');
    });


/* Navigation */
  $('.c-menu').on('click', function(){
    if ($('.c-nav__menu-container').hasClass('is-open')) {
      $('.c-menu').removeClass('is-active');
    	$('.c-nav__menu-container').removeClass('is-open');
      $('body, html').removeClass('loading');
    } else {
      $('.c-menu').addClass('is-active');
    	$('.c-nav__menu-container').addClass('is-open');
      $('body, html').addClass('loading');
    }
  });

    // to top right away
  if ( window.location.hash ) scroll(0,0);
  // void some browsers issue
  setTimeout( function() { scroll(0,0); }, 1);

  $(function() {

      // your current click function
      $('.c-nav__item').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({
              scrollTop: $($(this).attr('href')).offset().top + 'px'
          }, 1000, 'swing');
          $('.c-menu').removeClass('is-active');
        	$('.c-nav__menu-container').removeClass('is-open');
          $('body, html').removeClass('loading');
      });

      // *only* if we have anchor on the url
      if(window.location.hash) {

          // smooth scroll to the anchor id
          $('html, body').animate({
              scrollTop: $(window.location.hash).offset().top + 'px'
          }, 1000, 'swing');
      }

  });
});

$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
      /* Hides loading window when pages finishes loading */
        // $('html, body').addClass( "loading" );
        setTimeout(function(){
          $('body').addClass( "loaded" );
          $('html, body').removeClass( "loading" );
        }, 4000);
        localStorage.setItem('popState','shown')
    }
    $('.c-loading__modal').css('display', 'none');
});
