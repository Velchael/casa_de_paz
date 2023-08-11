
/********Meenu lateral ******************** */

var sideMenu = document.getElementById('side-menu');
      
function openMenu() {
    sideMenu.classList.remove('hidden');
    sideMenu.classList.add('visible');
}

function closeMenu() {
    sideMenu.classList.remove('visible');
    sideMenu.classList.add('hidden');
}

/**********Carrusel automatico */

const carrusel = document.querySelector(".carrusel-items");
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft >= maxScrollLeft) {
        step = -1;
      } else if (carrusel.scrollLeft <= 0) {
        step = 1;
      }
  }, 40);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});
start();