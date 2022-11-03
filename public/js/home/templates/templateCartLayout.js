const templateCartLayout = (data) => {

  const cartLayout = document.createElement('div');
  cartLayout.classList.add('cart_sidebar');

  const containerItemsCart = document.createElement('div');
  containerItemsCart.classList.add('items_cart');

  const headerCart ='<h2 class="title_cart"> Mi carrito </h2> <i id="btnCloseCart" class="fa-solid fa-xmark"></i>';
  cartLayout.appendChild(containerItemsCart);
  containerItemsCart.insertAdjacentHTML('afterbegin', headerCart);

  if (data.errors) {
    containerItemsCart.insertAdjacentHTML('beforeend', `<p> ${data.errors} </p>`);
    document.body.insertAdjacentElement('afterbegin', cartLayout);

    setTimeout(() => {
      animationOpenCart();
      deleteItemCart();
    }, 100);

    return;
  }

  data.forEach((element) => {
    const { title, subtitle, price, id, img } = element;

    const item = document.createElement('div');
    item.classList.add('item');
    
    item.innerHTML = 
    `
      <div class="info_item">
         <h3 class="title_item">${title}</h3>
         <p class="subtitle_item"> "${subtitle}"</p>
        <span class="price_item">Precio ${convertNumber(price)} </span>
         <input type="button" class="delete_item" id=${id} value="Eliminar">
      </div>
      
      <div class="container_img-cart">
        <img src="${img}" alt="">
      </div>
    `;

    containerItemsCart.appendChild(item);
  });


  const cartItemsPrice = data.map(element => element.price);
  const preTotal = cartItemsPrice.reduce((prev, curr) => prev + curr);
  let totalInt = convertNumber(preTotal);


  containerItemsCart.insertAdjacentHTML('beforeend', `<div> <h2 id="total_cart"> Total: ${totalInt} </h2> </div>`);

  document.body.insertAdjacentElement('afterbegin', cartLayout);

  setTimeout(() => {
    animationOpenCart();
  }, 100);

};


function updateSubtotal(ordersDetails) {

  if (ordersDetails.errors) {

    selectHtml('#total_cart').innerText = ordersDetails.errors

      
  }
  
  const subtotal = ordersDetails.map(element => element.price).reduce((prev, curr) => prev + curr);
  selectHtml('#total_cart').innerText = `Total: ${convertNumber(subtotal)}`

}
