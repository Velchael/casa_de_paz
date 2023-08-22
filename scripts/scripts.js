
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
  }, 50);
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

////////////////////////// El navegador

window.addEventListener('DOMContentLoaded', function() {
  var fidelidadeLink = document.querySelector('a[href="#fidelidade"]');
  var fidelidadeElement = document.querySelector('#fidelidade');
  
  fidelidadeLink.addEventListener('click', function(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
  if (fidelidadeElement) {
  fidelidadeElement.scrollIntoView();
  }
  });
  });

  window.addEventListener('DOMContentLoaded', function() {
    var redencaoLink = document.querySelector('a[href="#redencao"]');
    var redencaoElement = document.querySelector('#redencao');
    
    redencaoLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    
    if (redencaoElement) {
    redencaoElement.scrollIntoView();
    }
    });
    });

    window.addEventListener('DOMContentLoaded', function() {
      var conquistaLink = document.querySelector('a[href="#conquista"]');
      var conquistaElement = document.querySelector('#conquista');
      
      conquistaLink.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      
      if (conquistaElement) {
      conquistaElement.scrollIntoView();
      }
      });
      });

      
    window.addEventListener('DOMContentLoaded', function() {
      var headerdosLink = document.querySelector('a[href="#headerdos"]');
      var headerdosElement = document.querySelector('#headerdos');
      
      headerdosLink.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      
      if (headerdosElement) {
        headerdosElement.scrollIntoView();
      }
      });
      });

      //////////////////boton home
      document.getElementById('home-button').addEventListener('click', goHome);

      function goHome() {
        const headerElement = document.querySelector('.headerdos');
        if (headerElement) {
            headerElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function goHomedos() {
      const headerElement = document.querySelector('.headerdos');
      if (headerElement) {
          headerElement.scrollIntoView({ behavior: 'smooth' });
      }
  }

////<li class="list"><a href ="#headerdos"><span class="first-letter">I</span>nicio</a></li>