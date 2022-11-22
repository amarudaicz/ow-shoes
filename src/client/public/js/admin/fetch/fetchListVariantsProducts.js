
async function listVariants() {

    
    const container = document.querySelector('.list-variants');
    const id = document.querySelector('#idProduct').value;

    loaderList(container);
    const productsVariants = await fetchGetProductsVariations(id);
    removeLoader(container, selectHtml('.wrapper-loader'));

    console.log(productsVariants);
    templateListVariations(productsVariants, container);
    
    applyFilters(productsVariants)
    deleteProductVariant()
    updatePriceVariant()
    updateStockVariant()
}

listVariants();


function applyFilters(listComplete) {

    const container = document.querySelector('.list-variants');
    const btnApplyFilter = selectHtml('#applyFilter');
    const inputSearch = selectHtml('#searchFilter');


    //EVENTO AL BTN FILTRAR 
    btnApplyFilter.onclick = async (e) => {        
        const attribute = selectHtml('#selectFilter').value;
        const productId = selectHtml('#idProduct').value;

        const listFiltred = await fetchGetFilterVariants( productId, attribute, inputSearch.value );
        
        if (listFiltred.error) {
            return toastr.error(listFiltred.error)
        }
        
        const rowTables = selectHtml('.row-table', 'all');
        rowTables.forEach(e => e.remove())

        templateListVariations(listFiltred, container);

    };


    //EVENTO AL INPUT SEARCH 
    inputSearch.oninput = (e)=>{
        if (e.target.value === '') {
            const rowTables = selectHtml('.row-table', 'all');
            rowTables.forEach(e => e.remove())
            templateListVariations(listComplete, container);

        }
    }


    

}

function deleteProductVariant() {

    const btnDeleteProduct = selectHtml('.btn-delete-variant', 'all')
    
    const destroyVariant = async (event) => {
        const idProductVariant = event.target.dataset.idvariant
        animationDeleteProduct(event.target.parentNode.parentNode.parentNode)
        
        await fetchDeleteProductVariant(idProductVariant)

    } ; 
    
    btnDeleteProduct.forEach(e => e.onclick = destroyVariant)

}





function updatePriceVariant() {

    const btnEditPriceVariant = selectHtml('.btn-edit-price-variant', 'all')
    console.log(btnEditPriceVariant);
    
    const editPrice = (e) => {

        const idVariant = e.target.dataset.idvariant

        const inputPriceVariant = selectHtml('#variant'+ idVariant)

        console.log(inputPriceVariant);
        if (inputPriceVariant) return

        e.target.insertAdjacentHTML('afterend', 
        `
            <input type="number" class="input-price-variant" id=dataInput${idVariant}>  
            <i class="fa-solid fa-check btn-check-edit" data-idvariant = ${idVariant} id=variant${idVariant} ></i>
        `
        )


        
        checkPrice(idVariant)

    }; btnEditPriceVariant.forEach(e => e.onclick = editPrice);



    function checkPrice(idVariant) {
       
        const btnCheckEdit = selectHtml('#variant' + idVariant)
        const inputEditPrice = selectHtml('#dataInput' + idVariant)

        btnCheckEdit.onclick = async (e) => {
            
            let priceValue = inputEditPrice.value

            if (priceValue === '') 
            return toastr.error('salame')
            
            const editOperation = await fetchEditProductVariant(idVariant, priceValue)
            const rowPrice = selectHtml('.row-price' + idVariant)
            rowPrice.innerText = convertNumber(editOperation.newPrice)
            toastr.success(editOperation.msg)
            inputEditPrice.value = ''
            
        }
    }
}


function updateStockVariant() {

    const inputStock = selectHtml('.input-edit-stock', 'all')
    
    const editStock = async (e) => {

        const newStock = e.target

        if (newStock.value === '') return

        console.log(newStock.dataset.idvariant);
        const editOperation = await fetchEditProductVariant(newStock.dataset.idvariant, undefined , newStock.value)

        const rowStock = selectHtml('.row-stock' + newStock.dataset.idvariant)
        
        rowStock.innerText = editOperation.newStock
        toastr.success(editOperation.msg)
        newStock.value = ''
    }



    inputStock.forEach(e => e.onblur = editStock)

    
}














function editSelectProducts() {
    
    const checks = selectHtml('.')




}



