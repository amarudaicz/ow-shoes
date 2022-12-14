



async function selectSwatches() {
 
  function swatchSelected(event, groupLabel, selectSpan, selectedStock, btnColor){

    console.log(event);
    console.log(groupLabel);
    console.log(selectSpan);

    const label = event.target.parentNode;
    groupLabel.forEach((e) => e.classList.remove('input-color-active'));
    label.classList.add('input-color-active');



    const setData = (event, span, stock) => {

        const dataClass = event.target.dataset.class
        const dataProduct = event.target.dataset.info
        const dataStock = event.target.dataset.stock

        if (dataStock) {
            stock.innerHTML = dataStock + '<i class="fa-solid fa-circle check-stock"></i>'
            stock.classList.remove(stock.classList[1])
            stock.classList.add(dataClass)

            if (stock.classList.contains('text-danger')){
                btnBuyProduct.setAttribute('disabled', '')
                btnBuyProduct.value = 'Sin stock'
                btnBuyProduct.style.background = '#7a7a7a'
            } 
            else{
                btnBuyProduct.removeAttribute('disabled', '')
                btnBuyProduct.value = 'Agregar al carrito'
                btnBuyProduct.removeAttribute('style')
                
            } 
            
        }

        span.innerHTML =  dataProduct  
    }

    setData(event, selectSpan, selectedStock )

    }


  function changeStateActive(groupInput, groupLabel, selectSpan, selectedStock, additional) {
   
    const setState = async (event) => swatchSelected(event, groupLabel, selectSpan, selectedStock)

    if (additional) {

        selectedColor.innerHTML = groupInput[0].dataset.info 
      
        console.log(selectedStock);

        const setProductSizes = async (event) => {

            swatchSelected(event, groupLabel, selectSpan, selectedStock );
            
            const colorId = event.target.value;
            const variantSizes = await fetchGetVariantsByColor(
              idProductModel,
              colorId
            );
      
            const swatches = selectHtml('.product-swatch-size', 'all');
            swatches.forEach((e) => groupSwatches.removeChild(e));
      
            variantSizes.forEach((e) => createSwatches(e, groupSwatches));
      
            const labelSizeGroup = selectHtml('.product-swatch-size', 'all');
            const inputSizeGroup = selectHtml('.input-size', 'all');
            const selectedSize = selectHtml('.selected-size')
            const selectedStockSpan = selectHtml('.selected-item-stock')

            changeStateActive(inputSizeGroup, labelSizeGroup, selectedSize, selectedStockSpan );
        };
      
        groupInput.forEach((e) => (e.onclick = setProductSizes));
        return
    }

    groupInput.forEach(e => e.onclick = setState);

  }



  const selectedColor = selectHtml('.selected-color')
  const selectedSize = selectHtml('.selected-size')
  const selectedStockSpan = selectHtml('.selected-item-stock')
  const btnBuyProduct = selectHtml('#btnBuyProduct')
  const btnSwatchesColor = selectHtml('.input-color', 'all');
  const grouplabelsColor = selectHtml('.product-swatch-color', 'all');
  const idProductModel = selectHtml('#idProductModel').value;
  const groupSwatches = selectHtml('#group-swatches');

  btnSwatchesColor[0].setAttribute('checked', '');
  const variantSizes = await fetchGetVariantsByColor(idProductModel, btnSwatchesColor[0].value);

  variantSizes.forEach((e) => createSwatches(e, groupSwatches));
  btnSwatchesColor[0].parentNode.classList.add('input-color-active');

  const labelSizeGroup = selectHtml('.product-swatch-size', 'all');
  const inputSizeGroup = selectHtml('.input-size', 'all');


  changeStateActive(btnSwatchesColor, grouplabelsColor,  selectedColor, selectedStockSpan, true );
  changeStateActive(inputSizeGroup, labelSizeGroup, selectedSize, selectedStockSpan );

}

selectSwatches();





function buyProduct() {

  async function sendData(event) {

    const form = selectHtml('.form_comprar');
    const dataForm = new FormData(form);
    const dataFormJSON = handleFormData(dataForm);
    const cartArray = [].push(dataFormJSON)

    if (localStorage.getItem('cart-user')) {
      let cart = JSON.parse(localStorage.getItem('cart-user'))  
      cart.push(dataFormJSON)
      localStorage.setItem('cart-user', cart)

    }

    localStorage.setItem('cart-user', JSON.stringify(cartArray))

    console.log(localStorage.getItem('cart-user'));

    // const res = await fetchInsertProductCart(dataFormJSON);

    if (res.errors) {
      try {

        return res.errors.forEach((e) => toastr.error(e.msg));

      } catch (err) {

        return toastr.error(res.errors);

      }
    }

    toastr.success('Producto agregado correctamente!');

    getCart();
  }

  const submitBtn = selectHtml('#btnBuyProduct');

  submitBtn.onclick = sendData;
}

buyProduct();

function handleFormData(formData) {
  let data = {};

  for (let key of formData.keys()) {
    data[key] = formData.get(key);
  }

  return data;
}
