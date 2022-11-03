setTimeout(() => {
  loadCart()
}, 1000);


function loadCart() {
  const btnCart = selectHtml('#btnCart');
  
  btnCart.onclick = getCart;
  async function getCart() {
  

    const cartLayout = selectHtml('.cart_sidebar')

    if (cartLayout) {
      animationOpenCart(selectHtml('.cart_sidebar'))

      return
    }

    const orderDetails = await fetchGetCart();
    
    templateCartLayout(orderDetails);

    setTimeout(() => {

      animationOpenCart(selectHtml('.cart_sidebar'))
      deleteItemCart()
      
    }, 10);

  
  }
}



function deleteItemCart() {
  const btnEliminar = selectHtml('.delete_item', 'all');
  btnEliminar.forEach(btn => btn.onclick = deleteItem);
  
  async function deleteItem(event){
    const idProduct = event.target.id;
    const itemCart = document.querySelector(`[id="${idProduct}"]`).parentNode.parentNode

    animationDeleteItem(itemCart);

    const resDataBase = await fetchDeleteCart(idProduct)
    const ordersDetails = await fetchGetCart();

    
    updateSubtotal(ordersDetails)
    

  }
}

