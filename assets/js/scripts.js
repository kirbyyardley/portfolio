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

  /* Sections to match viewport height to 50% */
  $('.o-height--half').css('height', window.innerHeight*.50+'px');
  $(window).resize(function() {
    $('.o-height--half').css('height', window.innerHeight*.50+'px');
  });

  /* Sections to match viewport height to 66% */
  $('.o-height--twothirds').css('height', window.innerHeight*.66+'px');
  $(window).resize(function() {
    $('.o-height--twothirds').css('height', window.innerHeight*.66+'px');
  });

  /* Sections to match viewport height to 100% */
  $('.o-height--full').css('height', window.innerHeight*.80+'px');
  $(window).resize(function() {
    $('.o-height--full').css('height', window.innerHeight*.80+'px');
  });

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
  var navTrigger = document.getElementById("menu-trigger");
  var menu = document.getElementById("menu");
  var bodyTag = document.getElementsByTagName("body")[0];

  navTrigger.onclick = function() {
      if (navTrigger.checked) {
          bodyTag.classList.add("menu-transition");
          var mar = parseInt(menu.clientHeight) - 12;
          document.getElementsByTagName("body")[0].style.marginTop = mar + "px";
      } else {
          bodyTag.classList.add("menu-transition");
          document.getElementsByTagName("body")[0].style.marginTop = "0";
      }
  }

  /* Video Hover */

  var figure = $(".c-video__project");
  var vid = figure.find("video");

  [].forEach.call(figure, function (item,index) {
      item.addEventListener('mouseover', hoverVideo.bind(item,index), false);
      item.addEventListener('mouseout', hideVideo.bind(item,index), false);
  });

  function hoverVideo(index, e) {
      vid[index].play();
  }

  function hideVideo(index, e) {
      vid[index].pause();
  }

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
