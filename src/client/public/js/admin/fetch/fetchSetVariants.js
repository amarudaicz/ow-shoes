



function setingVariants() {

    const btnEnviar = document.querySelector('#btnAddVariants')
    
    
    btnEnviar.addEventListener('click', ()=>{

        let atributeName = document.querySelector('#nameItem')
        let valuesAtribute = document.querySelector('#valueItem')

        let data = {
            atribute:document.querySelector('#nameItem').value,
            values:document.querySelector('#valueItem').value,
            id:document.querySelector('#product_model_id').value,
        }
        
        fetchSetVariants(data)
        
        atributeName.value = ''
        valuesAtribute.value = ''
    })
}

setingVariants()