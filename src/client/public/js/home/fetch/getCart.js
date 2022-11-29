setTimeout(() => {
  loadCart()
}, 1000);


async function getCart() {
  
  
  const cartLayout = selectHtml('.cart_sidebar')
  if (cartLayout) cartLayout.remove()
  
  const orderDetails = await fetchGetCart();
  console.log(orderDetails);
  templateCartLayout(orderDetails);
  animationOpenCart(selectHtml('.cart_sidebar'))
  

  setTimeout(() => {

    deleteItemCart()
    
  }, 100);

}


function loadCart() {
  const btnCart = selectHtml('#btnCart');
  
  btnCart.onclick = getCart;
}


function deleteItemCart() {
  const btnEliminar = selectHtml('.delete_item', 'all');

  btnEliminar.forEach(btn => btn.onclick = deleteItem);

  async function deleteItem(event){
    const idProduct = event.target.id;
    const itemCart = document.querySelector(`[id="${idProduct}"]`).parentNode.parentNode

    animationDeleteItem(itemCart);

    const deleteProduct = await fetchDeleteItemCart(idProduct)

    const ordersDetails = await fetchGetCart();

    
    updateSubtotal(ordersDetails)
    
  }
}

