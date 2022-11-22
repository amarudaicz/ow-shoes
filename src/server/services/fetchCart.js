async function fetchGetCart() {
  return await fetch('http://localhost:3000/cart/getCartUser', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  }).then((res) => res.json());
}


async function fetchDeleteItemCart(id) {
  return await fetch(`http://localhost:3000/cart/delete-product/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
}


async function fetchAssignOrder() {
  const res = await fetch(`http://localhost:3000/cart/assign-order`, {
    headers: {
      token: localStorage.getItem('token.ow'),
      orderId: localStorage.getItem('orderId'),
    },
  });

  const data = await res.json();
  localStorage.setItem('orderId', data);
}


async function fetchInsertProductCart(body) {
  return await fetch(`http://localhost:3000/cart/insert-product`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token.ow'),
      orderId: localStorage.getItem('orderId'),
    },
    body:body
  }).then((res) => res.json());
}
