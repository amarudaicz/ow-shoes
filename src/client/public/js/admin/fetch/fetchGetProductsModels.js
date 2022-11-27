const publicUrl = 'https://ow-shoes.vercel.app/'


const fetchGetProductsModels = async () => {
  const urlFetch = publicUrl + `admin/list-products `;

  const resServer = await fetch(urlFetch, {
    method: 'GET',
  });

  return resServer.json();
};

(async function loadList() {

  const container = document.querySelector('.container-products-models');
  console.log(container);

  const data = await fetchGetProductsModels();
  console.log(data);
  templateListProductsModels(data, container);


  setTimeout(() => {
    
    deleteProduct();
  }, 1000);

})();



function deleteProduct() {

  const btnEliminarProducto = document.querySelectorAll('.btn-delete-product');
  console.log(btnEliminarProducto);

  btnEliminarProducto.forEach((element) => {

    element.addEventListener('click', async (event) => {
      console.log(element);

      const idProduct = event.target.id;
      const itemDom = element.parentNode.parentNode.parentNode;
      console.log(itemDom);
      await fetchDeleteProduct(idProduct);

      animationGoTrash(itemDom);
    });

  });

}


function animationGoTrash(item) {

  anime({
    targets: item,
    duration: 500,
    translateX: '100%',
    opacity: ['1', '0'],
    easing: 'easeInOutQuad',
  });

  setTimeout(() => {
    item.remove();
  }, 700);
}


