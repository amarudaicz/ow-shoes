function handleFormData(formData) {
  let data = {};

  for (let key of formData.keys()) {
    data[key] = formData.get(key);
  }

  return JSON.stringify(data);
}



function removeAlerts(htmlElements) {
  htmlElements.forEach((e) => {
    document.querySelectorAll(e).forEach((e) => e.remove());
  });
}




function createAlerts(response, container) {
  if (response.errors) {
    let errors = response.errors.errors; //=Array con los errores del express-validator

    if (errors) {
      return errors.forEach((error) => {
        templateAlert(container, error.msg, 'notification-error'); //crea el html de la alertas del validador
      });
    }

    return templateAlert(container, response.errors, 'notification-error'); //crea la alerta de usuario ya existente
  }
}
