const publicUrl = 'https://ow-shoes.vercel.app/'


async function fetchLoginGo(user) {

  return await fetch(publicUrl + 'login/go', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: user,
  })
  .then(res => res.json())
  
}


async function fetchLoginRegister(newUser) {

  return await fetch(publicUrl + 'login/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newUser,
  })
  .then(res => res.json())
}



async function isLogged() {

  return await fetch(publicUrl + 'login/isAuth', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  })
  .then(res => res.json())
  
}


async function getUser() {

  return await fetch(publicUrl + 'login/getUser', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  })
  .then(res => res.json())

  
}






