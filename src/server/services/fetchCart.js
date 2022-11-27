const publicUrl = 'https://ow-shoes.vercel.app/'

async function fetchGetCart() {
  return await fetch(publicUrl + 'cart/getCartUser', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  }).then((res) => res.json());
}


async function fetchDeleteItemCart(id) {
  return await fetch(publicUrl + `cart/delete-product/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
}


async function fetchAssignOrder() {
  const res = await fetch(publicUrl + `cart/assign-order`, {
    headers: {
      token: localStorage.getItem('token.ow'),
      orderId: localStorage.getItem('orderId'),
    },
  });

  const data = await res.json();
  localStorage.setItem('orderId', data);
}


async function fetchInsertProductCart(body) {
  return await fetch(publicUrl + `cart/insert-product`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token.ow'),
      orderId: localStorage.getItem('orderId'),
    },
    body:body
  }).then((res) => res.json());
}
