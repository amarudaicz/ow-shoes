




async function fetchGetCart() {

    return await fetch('http://localhost:3000/cart/getCartUser', {
      headers:{
        token:localStorage.getItem('token.ow')
      }

    })
    .then(res => res.json())
}


async function fetchDeleteCart(id) {

    return await fetch(`http://localhost:3000/cart/delete-product/${id}`, {
        method:'DELETE'
    })
    .then(res => res.json())

}