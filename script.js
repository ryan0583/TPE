$(document).ready(function()
{
  var velocity = 1;

  $(window).bind('load', update);

  $(window).bind('scroll', update);

  $(window).bind('resize', update);

  function update()
  {
    var winTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    var navBarTop = winHeight - 50;

    setupCarousel();

    scaleText();

    stickNavBarToTop();

    scrollDates();

    function scaleText()
    {
      if (isBreakpoint('xs')
        || isBreakpoint('sm'))
      {
        $('blockquote').each(function()
        {
          $(this).removeClass('blockquoteFont');
        });

        $('p').each(function()
        {
          $(this).removeClass('pFont');
        });

        $('.big').each(function()
        {
          $(this).css('font-size', '3vw');
        });
      }
      else
      {
        $('blockquote').each(function()
        {
          $(this).addClass('blockquoteFont');
        });

        $('p').each(function()
        {
          $(this).addClass('pFont');
        });

        $('.big').each(function()
        {
          $(this).css('font-size', '2.1vw');
        });
      }
    }

    function isBreakpoint(alias)
    {
      return $('.device-' + alias).is(':visible');
    }

    function setupCarousel()
    {
      $('#mycarousel').removeClass('hide');
      $('#home').css("background-image", "none");
    }

    /*stick the navbar to the top of the window*/
    function stickNavBarToTop()
    {
      if (navBarTop <= winTop)
      {
          $('nav:first').addClass('sticky');
      }
      else
      {
        $('nav:first').removeClass('sticky');
      }
    }

    function scrollDates()
    {
      var mainTop = $('#main').offset().top;
      if (mainTop <= winTop + 50)
      {
        var height = $('#scrollDates').height();
        var mainHeight = $('#main').height();
        var mainBottom = mainTop + mainHeight

        if (mainBottom <= winTop + 50 + height)
        {
          $('#scrollDates').removeClass('stickyDates');

          var fixed = mainBottom - height;

          $('#scrollDates').addClass('absolute');
        }
        else
        {
          $('#scrollDates').removeClass('absolute');
          $('#scrollDates').addClass('stickyDates');
        }
      }
      else
      {
        $('#scrollDates').removeClass('stickyDates');
        $('#scrollDates').removeClass('absolute');
      }
    }
  };

    $(".carousel").swipe(
    {
      swipe: function(event, direction, distance, duration, fingerCount, fingerData)
      {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
      }
    });

    $(".socialMedia").mouseover(function()
    {
      var id = $(this).attr('id');
      $(this).attr('src', 'img/' + id + 'color.png');
    });

    $(".socialMedia").mouseout(function()
    {
      var id = $(this).attr('id');
      $(this).attr('src', 'img/' + id + 'black.png');
    });

    $('.navbar-toggle').mouseup(function()
    {
      var expanded = $(this).attr('aria-expanded');
      if (expanded == 'false')
      {
        var scrollBottom = $(window).scrollTop() + $(window).height();
        var navbaroffset = $(this).offset();
        var navbarTop = navbaroffset.top;
        var popupHeight = 170;
        var menuBottom = navbarTop + popupHeight;
        if (menuBottom > scrollBottom)
        {
          var scrollPositon = menuBottom - $(window).height();
          $('html, body').animate({scrollTop: scrollPositon}, 'slow');
        }
      }
    });

    /*smooth scroll page links*/
    $('.pageLink').click(function(event)
    {
      event.preventDefault();
      var id = $(this).attr('href');
      var offsetTop = 0;
      if (id != '#home')
      {
        var offset = $('' + id).offset();
        offsetTop = offset.top;
      }

      $('html, body').animate({scrollTop: offsetTop}, 'slow');
    });
});
