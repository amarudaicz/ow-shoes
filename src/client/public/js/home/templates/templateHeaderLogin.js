



function templateBtnsLogin(container, position) {

  const template = `
        <div class="btns-login" >
        
                <a href="/login">
                    <input class="iniciar" type="button" value="Iniciar sesion" />
                </a>

                <a href="/login/register">
                    <input class="registrarse"" type="button" value="Registrarse">
                </a>
        
        </div>
    
    `;
  container.insertAdjacentHTML(position, template);
}



function templateDataUser(container, user, position) {

  const {name} = user 

  const template = 
  `     
        <div class ="container_user">
        
            <p class="username">${name}</p>

              <i class="fa-solid fa-cart-shopping icon_cart" id="btnCart"></i>

              <i class="fa-solid fa-right-from-bracket icon_log-out"></i>
            

        </div>
    
    `;
    

  container.insertAdjacentHTML(position, template);
}
