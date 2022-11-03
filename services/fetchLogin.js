


async function fetchLoginGo(user) {

  return await fetch('http://localhost:3000/login/go', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: user,
  })
  .then(res => res.json())
  
}


async function fetchLoginRegister(newUser) {

  return await fetch('http://localhost:3000/login/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newUser,
  })
  .then(res => res.json())
}


async function isLogged() {

  return await fetch('http://localhost:3000/login/isAuth', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  })
  .then(res => res.json())
  
}



async function getUser() {

  return await fetch('http://localhost:3000/login/getUser', {
    headers: {
      token: localStorage.getItem('token.ow'),
    },
  })
  .then(res => res.json())

  
}
