switchLogin()



function switchLogin ( ) {
    const btnRegistrarse = document.querySelector('#btnRegistrarse')
    const btnIniciarSession = document.querySelector('#btnIniciarSession')
    const blockLogin = document.querySelector('.login')
    const blockRegister = document.querySelector('.register')

    btnRegistrarse.addEventListener('click', ()=>{
        blockLogin.style.translate = '100%'
        blockRegister.style.display = 'block' 
        blockRegister.style.translate = '-50px' 
    })

    btnIniciarSession.addEventListener('click', ()=>{
        blockLogin.style.translate = '0px'
        blockRegister.style.display = 'block' 
        blockRegister.style.translate = '90%'

    })


}