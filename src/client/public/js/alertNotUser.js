const overlay = document.querySelector('#overlayAlert')
const cerrarOverlay = document.querySelector('#cerrarOverlay');
if (overlay) {
  
  disableScroll()
}

cerrarOverlay.addEventListener('click', () => {
  overlayAlert.style.display = 'none'   
  enableScroll()     
})

function disableScroll() {
let x = window.scrollX;
let y = window.scrollY;
window.onscroll = ( ) => window.scrollTo(x, y);
}

function enableScroll() {
  window.onscroll = null;
}

