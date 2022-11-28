
async function setUserData() {
    
    const isLog = await isLogged()


    if (isLog.errors) {
        return templateBtnsLogin(selectHtml('.switch'), 'afterend')
    }
         
    const user = await getUser()  
    templateDataUser(selectHtml('.switch'), user, 'afterend')
    
    
    const order = await fetchAssignOrder()
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
