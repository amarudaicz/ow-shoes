


(function insertProduct() {
  const formInsertProduct = document.querySelector('#formInsertProduct');
  const btninsertProduct = document.querySelector('#btnSubmitProduct');
  

  btninsertProduct.addEventListener('click', async (e) => {
    // e.preventDefault()
    
    
    const formData = new FormData();
    const files = selectHtml('#images-detail-new-product')

    console.log(files.files);

    formData.append('title', selectHtml('#name-new-product').value )
    formData.append('files', files )

    // for (let i = 0; i < files.files.length; i++) {
    //   formData.append('files', files.files[i] )
    // }
    
    // const res = await fetchInsertProduct(formData)
    

    // addProductList(newProduct, res.insertId)
    // deleteProduct()
    
  });


})();





