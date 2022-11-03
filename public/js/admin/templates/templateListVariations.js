

function templateListVariations(data, container) {
  
    data.forEach(async (element) => {
   
      const {value, atribute, price, sku, variant_id, product_id, id  } = element
        
      
      const product = document.createElement('tr'); product.classList.add('row')
      
      product.innerHTML =  `
      
          <tr class="rows-table">
              <td class="row-data">${sku}</td>
              <td class="row-data">${id}</td>
              <td class="row-data">${convertNumber(price)}</td>
              <td class="row-data">${atribute}</td>
              <td class="row-data">${value}</td>
              <td class="row-data">${stock='1'}</td>
              <td class="row-data">${unidades_vendidas='12'}</td>
  
              <a href="http://localhost:3000/admin/edit-product?id=${id}">
                <input type="button" class="btn-edit-product" value="Editar">
              </a>
  
              <input type="button" class="btn-delete-product" value="Eliminar" id="${id}">
  
  
          </tr> 
      `;
  
  
      container.appendChild(product)
    });
    
  }
  