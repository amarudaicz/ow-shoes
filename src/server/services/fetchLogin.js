

async function fetchLoginGo(user) {

  return await fetch(  'https://ow-shoes.vercel.app/login/go', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: user,
  })
  .then(res => res.json())
  
}


async function fetchLoginRegister(newUser) {

  return await fetch(  'https://ow-shoes.vercel.app/login/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newUser,
  })
  .then(res => res.json())
}



async function isLogged() {

  return await fetch('https://ow-shoes.vercel.app/login/isAuth', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  })
  .then(res => res.json())
  
}


async function getUser() {

  return await fetch('https://ow-shoes.vercel.app/login/getUser', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  })
  .then(res => res.json())

  
}






