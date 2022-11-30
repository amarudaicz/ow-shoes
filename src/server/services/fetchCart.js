const urlHost ='https://ow-shoes.vercel.app/'

async function fetchGetCart() {
  return await fetch( urlHost + 'cart/getCartUser', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  }).then((res) => res.json());
}


async function fetchDeleteItemCart(id) {
  return await fetch(urlHost + `cart/delete-product/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
}


async function fetchAssignOrder() {
  return await fetch(urlHost + `cart/assign-order`, {
    headers: {
      token: localStorage.getItem('token.ow'),
      orderId: localStorage.getItem('orderId'),
    },
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('orderId', data);
  })
  
}


async function fetchInsertProductCart(body) {
  return await fetch(urlHost + `cart/insert-product`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token.ow'),
      orderId: localStorage.getItem('orderId'),
    },
    body:body
  }).then((res) => res.json());
}
