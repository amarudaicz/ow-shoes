
const showAtributes = async () => {

  const containerSizes = selectHtml('#container-sizes');
  const btnAddColor = selectHtml('#btnAddColor')
  
  //FETCH
  const variationsValues = await fetchGetAtributesValues('sizes_guide')


  variationsValues.forEach((e, i) => {
    const value = `<input type="button" class="value-variation-1" id=${e.id} value=${e.size_arg}>`;
    containerSizes.insertAdjacentHTML('afterbegin', value);
  });


  const valueVariation = selectHtml('.value-variation-1', 'all');
  valueVariation.forEach((e) => {
      e.onclick = (event) => {
        const data = event.target 
        data.classList.toggle('value-variation-1-active');
      };
  });
  
  
  btnAddColor.onclick = () => { 
  
    if (selectHtml('#container-colors'))
    return
    templateChoseVariations(containerSizes.parentNode, 'afterend')
    
    const containerColors = selectHtml('#container-colors')
    
    showAtributes2(containerColors)

  }

};

showAtributes();

async function showAtributes2(container) {

    const variationsValues = await fetchGetAtributesValues('colors_guide')
    
    variationsValues.forEach((e, i) => {
      const value = `<input type="button" class="value-variation-2" id=${e.id} value=${e.color_arg}>`;

      container.insertAdjacentHTML('beforeend', value);

    });

    const valueVariation = selectHtml('.value-variation-2', 'all');

    valueVariation.forEach((e) => {
      e.onclick = (event) => {
        const data = event.target 
        data.classList.toggle('value-variation-2-active');
      };
    });
  
  
}


function insertVariations() {

  const sendVariations = selectHtml('#sendVariations')
  const formSendVariations = selectHtml('#formSendVariations')

  sendVariations.onclick = async () => {
    const formData = new FormData(formSendVariations)
    const values1 = selectHtml('.value-variation-1-active', 'all')
    const values2 = selectHtml('.value-variation-2-active', 'all') 
  
    const valuesGroup1 = []
    const valuesGroup2 = []
    values1.forEach(e => valuesGroup1.push(e.id))
    values2.forEach(e => valuesGroup2.push(e.id))
    
    formData.append('valuesId1', valuesGroup1)
    formData.append('valuesId2', valuesGroup2)

    const data = handleFormData(formData)

    const insertOperation = await fetchInsertVariants(data)
    console.log(insertOperation);


    createAlertsToastr(insertOperation)


    const id = document.querySelector('#idProduct').value;

    setTimeout(async() => {
      const productsVariants = await fetchGetProductsVariations(id);
      console.log(productsVariants);

      const container = document.querySelector('.list-variants');
      const rowTables = selectHtml('.row-table', 'all');
      console.log(rowTables);
      rowTables.forEach(e => e.remove())
      templateListVariations(productsVariants, container)
      deleteProductVariant()
      updatePriceVariant()
    }, 2000);


  }
}

insertVariations()