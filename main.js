$(function () {
  //最初にロゴを表示させる
  /*setTimeout(function () {
    $(".start h1").fadeIn(1600);
  }, 500);
  setTimeout(function () {
    $(".start").fadeOut(1000);
  }, 3000);*/

  var pagetop = $(".top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
