$(document).ready(function () {

  var $menu = $(".page-header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100 && $menu.hasClass("page-header__default")) {
      $menu.removeClass("page-header__default fadeInUp").addClass("page-header__fixed fadeInDown");
    } else if ($(this).scrollTop() <= 100 && $menu.hasClass("page-header__fixed")) {
      $menu.removeClass("page-header__fixed fadeInDown").addClass("page-header__default fadeInUp");
    }
  });//scroll
});