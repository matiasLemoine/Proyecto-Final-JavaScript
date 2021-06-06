$(".boton1").on("click", mostrarMensaje);
function mostrarMensaje() {
  $(".popuptext1").fadeIn(1000);
  $(".popuptext1").delay(1000);
  $(".popuptext1").fadeOut(1000);
}

$(".boton2").on("click", mostrarMensajee);
function mostrarMensajee() {
  $(".popuptext2").fadeIn(1000);
  $(".popuptext2").delay(1000);
  $(".popuptext2").fadeOut(1000);
}