

function templateListVariations(data, container) {
  
    data.forEach(async (element) => {
   
      let {color_arg, stock, sku, size_arg, id, price  } = element


      const product = document.createElement('tr'); product.classList.add('row-table')
      
      product.innerHTML =  `
      
            <td>
              <div class="container-check-product">
                <label class="label-check-product" for=shoe${id}></label>
                <input type="checkbox" class="check-product-variant" value=${id} id=shoe${id}>
              </div>
            </td>
            <td class="row-data">${sku}</td>
            <td class="row-data">#${id}</td>
            <td class="row-data">
            <div class="container-price">

            <span class="row-price${id}">${convertNumber(price)}</span>

            <i class="fa-solid fa-pen-to-square btn-edit-price-variant" data-idvariant= ${id}></i>
            
            </>
            </td>
            <td class="row-data">${size_arg}</td>
            <td class="row-data">${color_arg}</td>
            <td class="row-data">
              <div class="container-stock">
              
                <span class="row-stock${id} row-stock">${stock}</span>

                <input type="number" class="input-edit-stock" data-idvariant=${id}>
              
              </div>
             
            </td>
            <td class="row-data">${unidades_vendidas = 10}</td>

            <td>
            <div class="container-btn-list">
              <input type="button" class="btn-delete-variant btn-list" value="Eliminar" data-idvariant=${id}>
            </div>
            </td>
      
      `;
  
  
      container.appendChild(product)
    });
    
  }
  