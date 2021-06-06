let popup = document.getElementById("myPopup");
popup.addEventListener("click",mostrarMensaje);

function mostrarMensaje() {
    popup.classList.toggle("show");
}