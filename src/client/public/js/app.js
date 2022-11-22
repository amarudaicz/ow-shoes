
const openMenuBtn = document.querySelector('.open__menu');
const closeMenuBtn = document.querySelector('.close__menu');
const containerMenu = document.querySelector('.container__menu');
const ultLanzamientos = document.querySelector('.ult-lanzamientos');
const btnSubmenu = document.querySelectorAll('.btn__submenu');
const header = document.querySelector('#header');
const body = document.querySelector('body');
const gridTienda = document.querySelector('.grid__tienda');
const logo = document.querySelector('.header__logo');

const  mostrarMenuMovile = () =>  {

  openMenuBtn.addEventListener('click', function (params) {
    containerMenu.classList.add('block');
    containerMenu.classList.remove('none');
    containerMenu.removeAttribute('style');
    setTimeout(() => {
      containerMenu.classList.add('mostrar__container-menu');
    }, 80);
    header.removeAttribute('style')


    
  });

  closeMenuBtn.addEventListener('click', function (params) {
    containerMenu.classList.remove('mostrar__container-menu');
    setTimeout(() => {
      containerMenu.classList.add('none');
      containerMenu.classList.remove('block');
    }, 100);
  });

  for (let i = 0; i < btnSubmenu.length; i++) {
    btnSubmenu[i].addEventListener('click', function () {
      const subMenu = this.nextElementSibling; //SELECCIONA EL ELEMENTO QUE LE SIGE EN HTML A PARTIR DEL ELEMENTO EN EL QUE EMPIEZA EL EVENTO
      const height = subMenu.scrollHeight; //Element.scrollHeight devuelve un valor numerico que es la medida de la altura del contenido de un elemento, incluyendo el contenido que no es visible en la pantalla debido al desbordamiento

      if (subMenu.classList.contains('desplegar')) {
        subMenu.classList.remove('desplegar');
        subMenu.removeAttribute('style');
      } else {
        subMenu.classList.add('desplegar');
        subMenu.style.height = height + 'px';
      }
    });
  }

  window.addEventListener('scroll', function () {
    if (window.innerWidth < 768) {
      containerMenu.style.marginRight = '-100%';
    } else {
      containerMenu.removeAttribute('style');
      containerMenu.classList.remove('block')
    }
  });
}


setTimeout(() => {
  
  mostrarMenuMovile()
}, 1000);




function disableScroll() {
  let x = window.scrollX;
  let y = window.scrollY;
  window.onscroll = () => window.scrollTo(x, y);
}

function enableScroll() {
  window.onscroll = null;
}


function scrollNav() {
  const enlaces = document.querySelectorAll('.menu__link');

  enlaces.forEach(function (enlace) {
    //Iteramos en cada enlace para agregar el evento a cada uno
    enlace.addEventListener('click', function (e) {
      //Añadimos el evento al dar click en los enlaces
      e.preventDefault(); //Prevenimos la configuracion por defecto de los eventos
      const seccionScroll = e.target.attributes.href.value; //asignamos a seccionScroll el href de los ENLACES
      console.log(seccionScroll);
      const seccion = document.querySelector(seccionScroll); //Seccion a la que dara scroll el enlace
      seccion.scrollIntoView({ behavior: 'smooth' }); //Accedemos a la configuracion con una funcion de javascript scrollIntoView() = el elemento sobre el cual se invoca scrollIntoView() sea visible al usuario mediante scroll.
    });
  });
}


