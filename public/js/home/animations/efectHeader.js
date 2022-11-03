efectHeader();

function efectHeader() {
  const header = document.querySelector('#header');
  const banner = document.querySelector('.banner__principal');
  console.log(banner);

  let scrollPos = 0;
  window.addEventListener('scroll', function (e) {
    // let scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // i < x = i MENOR QUE x
    // i > x = i MAYOR QUE X

    let scroll = document.body.getBoundingClientRect().top;

    if (scroll > scrollPos) {
      header.style.transform = 'translateY(0px)';
      header.classList.add('fijar__header');
    }

     if (scroll === 0) {
       header.classList.remove('fijar__header');
    }
    
    if (scroll < scrollPos) {
      header.classList.remove('fijar__header');
      header.style.transform = 'translateY(-100%)';
    }

    scrollPos = document.body.getBoundingClientRect().top;
  });
}
