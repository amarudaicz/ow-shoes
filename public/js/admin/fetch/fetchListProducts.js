
(async function loadList() {

  try {
    
    const container = document.querySelector('.t-body');
    const data = await fetchGetListProducts();
    
    templateListProducts(data, container);


    deleteProduct()

  }catch (err) {
  
    
  }

}())


function deleteProduct() {
    try {

        const btnEliminarProducto = document.querySelectorAll('.btn-delete-product')
        console.log(btnEliminarProducto);
        

      btnEliminarProducto.forEach(element => {
        element.addEventListener('click', async(event)=>{
          const idProduct = event.target.id
          const itemDom = element.parentNode
            
          const data = await fetchDeleteProduct(idProduct)

          animationGoTrash(itemDom)

        })

      });
    } catch (err) {




    }
}






function animationGoTrash(item) {

  alert('Seguro que desea eliminar el producto?')

  anime({
    targets:item,
    duration:200,
    translateX:'100%',
    opacity:['1', '0'],
    easing:'easeInOutQuad'

  })

  setTimeout(() => {
    item.remove()
  }, 300);

}
