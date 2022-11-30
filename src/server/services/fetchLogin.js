const urlHost = 'https://ow-shoes.vercel.app/'


async function fetchLoginGo(user) {

  return await fetch(  urlHost + 'login/go', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: user,
  })
  .then(res => res.json())
  
}


async function fetchLoginRegister(newUser) {

  return await fetch(  urlHost + 'login/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newUser,
  })
  .then(res => res.json())
}



async function isLogged() {

  return await fetch(urlHost + 'login/isAuth', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  })
  .then(res => res.json())
  
}


async function getUser() {

  return await fetch(urlHost + 'login/getUser', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  })
  .then(res => res.json())

  
}






