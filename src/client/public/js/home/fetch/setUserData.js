
async function setUserData() {
    
    const isLog = await isLogged()


    if (isLog.errors) {
        return templateBtnsLogin(selectHtml('.switch'), 'afterend')
    }
         

    const orderId = await fetchAssignOrder()
        
    const user = await getUser()  
      
    templateDataUser(selectHtml('.switch'), user, 'afterend')
    logOut()
    
}

function logOut( ){

    const btnLogOut = selectHtml('.icon_log-out')
    console.log(btnLogOut)

    btnLogOut.onclick = ()=>{

        localStorage.removeItem('token.ow')
        location.reload()

    }


}
    


setUserData()
