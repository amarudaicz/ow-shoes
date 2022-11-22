


(function acordeonAnime() {
  const btnExpandAcordeon = selectHtml('.btn-expand-acordeon');
  const acordeon = selectHtml('.acordeon', 'all');
  const acordeons = selectHtml('.acordeon');

  btnExpandAcordeon.addEventListener('click', () => {
    
    let acordeonAnimation = anime({
      targets: ['.acordeon'],
      opacity: ['0', '1'],
      easing: 'easeInOutSine',
      duration: 500,
    });
    

    if(acordeons.style.display === 'flex') {

      acordeonAnimation.reverse
      
      acordeon.forEach((e) => {
        e.style.display = 'none';
        e.style.opacity = '0';

      });

      return
    }

    acordeon.forEach((e) => {
      e.style.display = 'flex';
    });


  });


})();
