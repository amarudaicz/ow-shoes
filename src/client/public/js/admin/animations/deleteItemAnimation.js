function animationDeleteProduct(item) {

    anime({
      targets: item,
      duration: 500,
      translateX: '100%',
      opacity: ['1', '0'],
      easing: 'easeInOutQuad',
    });
  
    setTimeout(() => {
      item.remove();
    }, 700);
  }
  
  
  