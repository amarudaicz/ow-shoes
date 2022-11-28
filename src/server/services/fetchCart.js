
async function fetchGetCart() {
  return await fetch('https://ow-shoes.vercel.app/cart/getCartUser', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  }).then((res) => res.json());
}


async function fetchDeleteItemCart(id) {
  return await fetch(`https://ow-shoes.vercel.app/cart/delete-product/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
}


async function fetchAssignOrder() {
  const res = await fetch(`https://ow-shoes.vercel.app/cart/assign-order`, {
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
  return await fetch(`https://ow-shoes.vercel.app/cart/insert-product`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token.ow'),
      orderId: localStorage.getItem('orderId'),
    },
    body:body
  }).then((res) => res.json());
}
