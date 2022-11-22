function animationOpenCart(target) {

  disableScroll();

  anime({
    targets: target,
    translateX: 0,
    duration: 100,
  });

  animationCloseCart()

  window.addEventListener('scroll', ()=>{

    anime({
      targets: '.cart_sidebar',
      translateX: '110%',
      duration: 100,
    });
    
    enableScroll()
  })

}

function animationCloseCart() {

    const btnCloseCart = selectHtml('#btnCloseCart')
    
    btnCloseCart.onclick = () => {

    enableScroll();

    anime({
      targets: '.cart_sidebar',
      translateX: '110%',
      duration: 100,
    });

  };
}


function animationDeleteItem(item) {
  anime({
    targets: item,
    duration: 500,
    translateX: '100%',
    opacity: ['1', '0'],
    easing: 'easeInOutQuad',
  });

  setTimeout(() => {
    item.remove();
  }, 1000);
}






