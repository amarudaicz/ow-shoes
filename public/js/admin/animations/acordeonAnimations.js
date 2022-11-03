

const query = (selector, equal) => {
  
  if (equal) {
    return document.querySelectorAll(selector); 
  }
  
  
  return document.querySelector(selector);
};

(function acordeonAnime() {
  const btnInsertProduct = query('#btnAddProduct');
  const formInsertProduct = query('#formInsertProduct');
  const acordeon = query('.acordeon', 1);
  const acordeons = query('.acordeon');

  console.log(formInsertProduct);

  const groupForm = formInsertProduct.childNodes;
  
  btnInsertProduct.addEventListener('click', () => {
    
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
