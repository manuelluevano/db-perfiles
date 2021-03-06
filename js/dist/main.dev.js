"use strict";

//DOM CONTENT LOADED
$(function () {
  alert("Funciona!!"); //MENU RESPONSIVE

  $('.bar').on('click', function () {
    $('.barra').slideToggle();
  }); // MENU FIJO

  var windowHeight = $(window).height();
  console.log("Mide: " + windowHeight + " pixeles");
  var barraAltura = $('.barra').innerHeight();
  console.log("La barra mide: " + barraAltura + " pixeles");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop(); //console.log('posición: ' + scroll + " pixeles");

    if (scroll > windowHeight) {
      $('.barra').addClass('fixed');
      console.log('Ya rebasaste!');
      $('body').css({
        'margin-top': barraAltura + 'px}'
      });
    } else {
      $('.barra').removeClass('fixed');
      console.log('Aun no');
      $('body').css({
        'margin-top': 'opx'
      });
    }
  }); //Refacciones

  $('.info .datos:first').show();
  $('nav.enlaces a:first').addClass('activo');
  $('nav.enlaces a').on('click', function () {
    $('.ocultar').hide();
    $('nav.enlaces a').removeClass('activo');
    $(this).addClass('activo');
    var enlace = $(this).attr('href');
    $(enlace).fadeIn(1000);
    console.log(enlace);
    return false;
  }); //Animaciones para los números

  $('.contador .resumen-evento li:nth-child(1) p').animateNumber({
    number: 21
  }, 1200);
  $('.contador .resumen-evento li:nth-child(2) p').animateNumber({
    number: 32
  }, 1200);
  $('.contador .resumen-evento li:nth-child(3) p').animateNumber({
    number: 45
  }, 1200);
  $('.contador .resumen-evento li:nth-child(4) p').animateNumber({
    number: 10
  }, 1200); //Cuenta Regresiva

  $('.cuenta-regresiva .resumen-evento').countdown('2020/12/31 24:00:00', function (event) {
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));
  });
});