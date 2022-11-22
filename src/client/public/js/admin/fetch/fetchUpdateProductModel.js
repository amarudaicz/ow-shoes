


function updateProductModel(params) {
    const btnSubmit = selectHtml('#btnUpdateProductModel')
    const formUpdateProduct = selectHtml('#formUpdateProductModel')


    btnSubmit.onclick = async (event) => {

        const formData = new FormData(formUpdateProduct)
        const formJSON = handleFormData(formData)
        const updateOperation = await fetchUpdateProductModel(formJSON)

        toastr.success('Producto Editado')

        setTimeout(() => {
            
            location.reload()
            
        }, 2000);

            

    }


    
}

updateProductModel()