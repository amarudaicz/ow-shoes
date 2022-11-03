



function setingVariants() {

    const btnEnviar = document.querySelector('#btnAddVariants')
    
    const url = 'http://localhost:3000/admin/seting-variations'

    btnEnviar.addEventListener('click', ()=>{

        let atributeName = document.querySelector('#nameItem')
        let valuesAtribute = document.querySelector('#valueItem')

        let data = {
            atribute:document.querySelector('#nameItem').value,
            values:document.querySelector('#valueItem').value
        }
        
        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },

            body:JSON.stringify(data)
        })
        
        atributeName.value = ''
        valuesAtribute.value = ''
    })
}

setingVariants()