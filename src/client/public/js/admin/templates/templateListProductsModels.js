




function templateListProductsModels(data, container) {
  
  data.forEach(async (element) => {
    
    let {title, price, unidades_vendidas, id  } = element
    

    const product = document.createElement('tr'); product.classList.add('row-table');
    
    product.innerHTML =  `
      
        <tr class="rows-table">
            <td>
              <div class="container-check-product">
                <input type="checkbox" value=${id} id=shoe${id}>
              </div>
            </td>

            <td class="row-data">${title}</td>
            <td class="row-data">${id}</td>
            <td class="row-data">${convertNumber(price)}$</td>
            <td class="row-data">${await fetchGetSizesProductModel(id)}</td>
            <td class="row-data">${await fetchGetColorsProductModel(id)}</td>
            <td class="row-data">${unidades_vendidas = 1} </td>
            <td>
            <div class="container-btn-list">
              <a href="https://ow-shoes.vercel.app/admin/edit-product?id=${id}">
                <input type="button" class="btn-edit-product btn-list" value="Editar">
              </a>

              <input type="button" class="btn-delete-product btn-list" value="Eliminar" id="${id}">
            </div>
            </td>


        </tr> 
    `;


    container.appendChild(product)
  });
  
}
