loadError();

function loadError() {
  const containerError = document.querySelector('#container_error-login');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const btnSubmit = document.querySelector('#btnSubmit');
  const formLogin = document.querySelector('.form_login');

  function checkUser() {
    fetch('/login/getUser', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        data.forEach((user, i, thisArg) => {
          if (
            email.value === thisArg[i].email &&
            password.value === thisArg[i].password
          ) {
            fetch('/home', {
              method: 'GET',
            }).then((res) => {
              console.log(res.url);
              location.href = res.url;
            });
          } else {
            var alertError = `<p class="alert_login">Contraseñas o email incorrectos </p>`;
            containerError.innerHTML = alertError;

            //   setTimeout(() => {
            //       containerError.innerHTML = ""
            //  }, 5000);
          }
        });
      });
  }

  btnSubmit.addEventListener('click', checkUser);
}
