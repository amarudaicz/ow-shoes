




function addProductList(newProduct, id) {

    const containerList = document.querySelector('.t-body')

    const product = document.createElement('tr')
    
    const {title, price, sizes, stock, unidades_vendidas=0 } = newProduct;


    product.innerHTML =  `
    
        <tr class="rows-table">
            <td class="row-data">${title}</td>
            <td class="row-data">${id}</td>
            <td class="row-data">${convertNumber(price)}$</td>
            <td class="row-data">${sizes}</td>
            <td class="row-data">${stock}</td>
            <td class="row-data">${unidades_vendidas}</td>

            <a href="http://localhost:3000/admin/edit-product?id=${id}">
              <input type="button" class="btn-edit-product" value="Editar">
            </a>

            <input type="button" class="btn-delete-product" value="Eliminar" id="${id}">


        </tr> 
    `;

    containerList.appendChild(product)


}