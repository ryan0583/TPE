var velocity = 1;

/*TODO Animate text as it appears on the screen*/

$(window).bind('scroll', update);

$(window).bind('resize', update);

function update()
{
  var winTop = $(window).scrollTop();
  var winHeight = $(window).height();
  var winWidth = $(window).width();
  var navBarTop = winHeight - 50;

  //alterHeadingBackgrounds();

  stickNavBarToTop();

  //resizeFooterImages();

  /*move the background image of the section headers a bit, and resize them based on screen height*/
  /*function alterHeadingBackgrounds()
  {
    $('.title-about').each(function()
    {
      var thisOffset = $(this).offset();
      var top = thisOffset.top;
      var height = $(this).height();

      var newPos = Math.round((top - 60 - winTop) * velocity);

      //$(this).css('backgroundPosition', '100% ' + newPos +  'px');
      //$(this).css('backgroundSize', 'auto ' + Math.round(0.2 * winHeight) + 'px');
      //$(this).css('height', Math.round(0.3 * winHeight) + 'px');
      //$(this).css('padding-top', Math.round(0.1 * winHeight) + 'px');
    });
  }*/

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

  /*resize footer images*/
  /*function resizeFooterImages()
  {
    $(".imgFooter").each(function()
    {
      var minHeight = 30;
      var maxHeight = 50;

      var height = Math.round(winWidth * 0.05);
      if (height < minHeight)
      {
        height = minHeight;
      }
      else if (height > maxHeight)
      {
        height = maxHeight;
      }

      $(this).attr('width', height + 'px');
    });
  }*/
};

$(".socialMedia").mouseover(function()
{
  var id = $(this).attr('id');
  $(this).attr('src', 'icons/' + id + ' color.svg');
});

$(".socialMedia").mouseout(function()
{
  var id = $(this).attr('id');
  $(this).attr('src', 'icons/' + id + ' black.svg');
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
  var offset = $('' + id).offset();
  var offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop}, 'slow');
});
