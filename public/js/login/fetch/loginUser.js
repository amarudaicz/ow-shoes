

const registerUser = () => {
  const formRegister = document.querySelector('#formRegister');
  const btnSendForm = document.querySelector('#btnSendForm');
  const blockLogin = document.querySelector('.login');
  const blockRegister = document.querySelector('.register');
  const containerErrors = document.querySelector('#container_errors');

  btnSendForm.onclick = async () => {

    removeAlerts(['.notification-error', '.notification-succes']);

    const dataForm = new FormData(formRegister);
    let newUser = handleFormData(dataForm); //Utils/handles return={"name":"inputData", ...}json

    const data = await fetchLoginRegister(newUser)
    


    if (data.errors) {
      let errors = data.errors.errors; //Array con los errores del express-validator

      if (errors) {
        return errors.forEach((error) => {
          templateAlert(containerErrors, error.msg, 'notification-error'); //crea el html de la alertas del validador
        });
      }

      return templateAlert(containerErrors, data.errors, 'notification-error'); //crea la alerta de usuario ya existente
    }


    localStorage.setItem('token.ow', data.token);
    templateAlert(containerErrors, data.succes, 'notification-succes'); //alerta de succes



    setTimeout(() => {
      blockLogin.style.translate = '0px';
      blockRegister.style.display = 'block';
      blockRegister.style.translate = '90%';
    }, 3000);
  

  };

};
registerUser();





const iniciarSession = () => {
  const btnGo = document.querySelector('#btnSubmitGo');
  const formLogin = document.querySelector('.form_login');
  const containerErrors = document.querySelector('#container_errors-login');

  btnGo.addEventListener('click', async () => {
    removeAlerts(['.notification-error', '.notification-succes']);

    const dataForm = new FormData(formLogin);
    let user = handleFormData(dataForm); //Utils/handles return={"name":"inputData", ...}json

    const data = await fetchLoginGo(user)
    

    if (data.errors) {
      return createAlerts(data, containerErrors);
    }


    localStorage.setItem('token.ow', data.token);
    localStorage.setItem('log', data.log);
    location.href = 'home';
  });
};
  
iniciarSession();











// (INNER) JOIN: Returns records that have matching values in both tables
// LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
// RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
// FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table