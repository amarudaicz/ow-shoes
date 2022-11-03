function animationOpenCart(target) {

  disableScroll();

  anime({
    targets: target,
    translateX: 0,
    duration: 100,
  });

  animationCloseCart()

}

function animationCloseCart() {

    const btnCloseCart = selectHtml('#btnCloseCart')
    btnCloseCart.onclick = () => {

    enableScroll();

    anime({
      targets: '.cart_sidebar',
      translateX: '100%',
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



