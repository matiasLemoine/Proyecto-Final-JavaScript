//Carteles Indicadores
$(".btn-mensaje1").on("click", siguiente1);
function siguiente1() {
  $(".contenedor2").show();
  $(".contenedor1").hide();
}

$(".btn-mensaje2").on("click", siguiente2);
function siguiente2() {
  $(".contenedor2").hide();
  $(".contenedor3").show();
}

$(".btn-mensaje3").on("click", siguiente3);
function siguiente3() {
  $(".contenedor3").hide();
  $(".contenedor4").show();
}

$(".btn-mensaje4").on("click", siguiente4);
function siguiente4() {
  $(".contenedor4").hide();
  $(".contenedor-prueba1").show();
  $(".prueba1").show();
  $(".prueba2").hide();
  $(".boton1").show();
  $(".boton2").show();
  $(".boton3").show();
  $(".boton4").show();
  $(".boton5").show();
  $(".boton6").show();
  $(".boton7").show();
  $(".boton8").show();
  $(".boton9").show();
  $(".boton10").show();
  $(".boton11").show();
  $(".boton12").show();
  $(".boton13").show();
  $(".boton14").show();
  $(".boton15").show();
  $(".boton16").show();
  $(".boton17").show();
  $(".boton18").show();
  $(".boton19").show();
  $(".boton20").show();
  $(".boton21").show();
}

//Funciones del juego

$(".boton19").on("click", funcion1);
function funcion1() {
  $(".mensaje1").fadeIn(1000);
  $(".mensaje1").delay(1000);
  $(".mensaje1").fadeOut(1000);
  $(".prueba1").hide();
  $(".prueba2").show();
}

if("click" != funcion1()) {
  $(".mensaje2").fadeIn(1000);
  $(".mensaje2").delay(1000);
  $(".mensaje2").fadeOut(1000);
}

else if("click" != funcion1()) {
  $(".mensaje3").fadeIn(1000);
  $(".mensaje3").delay(1000);
  $(".mensaje3").fadeOut(1000);
}

else  {
  $(".mensaje4").fadeIn(1000);
  $(".mensaje4").delay(1000);
  $(".mensaje4").fadeOut(1000);
  $(".prueba1").hide();
  $(".prueba2").show();
}

