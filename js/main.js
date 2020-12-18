$(document).ready(function () {
  $('.burger-menu').click(function () {
    $('.burger-menu').toggleClass('open-menu');
    $('.header__menu-list').toggleClass('open-menu');
  });
});