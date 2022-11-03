


(function insertProduct() {
  const formInsertProduct = document.querySelector('#formInsertProduct');
  const btninsertProduct = document.querySelector('#btnSubmitProduct');
  
  
  btninsertProduct.addEventListener('click', async () => {

    let data = new FormData(formInsertProduct);
    const newProduct = handleFormData(data)

    const res = await fetchInsertProduct(newProduct)


    addProductList(newProduct, res.insertId)

    
    deleteProduct()
  });


})();



function handleFormData(formData) {
    
  let images = formData.getAll('images').map(i => i.name)

  let newProduct= {
    title:formData.get('title'),
    subtitle:formData.get('subtitle'),
    price:formData.get('price'),
    priceOffer:formData.get('priceOffer'),
    sizes:formData.get('sizes'),
    stock:formData.get('stock'),
    description1:formData.get('description1'),
    description2:formData.get('description2'),
    images: JSON.stringify(images)  
  }

  return newProduct
}




