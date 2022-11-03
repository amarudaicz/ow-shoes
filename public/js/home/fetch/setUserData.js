
async function setUserData() {
    
    const isLog = await isLogged()
                                        
    if (isLog) {
        const user = await getUser()
        
        templateDataUser(selectHtml('.switch'), user, 'afterend')
        
        return
    }


    templateBtnsLogin(selectHtml('.switch'), 'afterend')

}


setUserData()
