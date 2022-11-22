






function createSwatches(variantsByColor, container) {

    if (variantsByColor.stock === 0) {

    return container.insertAdjacentHTML('beforeend', 
    `
    <label for="sizeProduct${variantsByColor.size_id}" class="product-swatch product-swatch-size swatch-out-stock" data-info="Talle ${variantsByColor.size_us} us - equivale a ${variantsByColor.size_arg}Arg"> 
                        
        <input style="display:none;" required class="input-size input-out-stock" name="size_id" id="sizeProduct${variantsByColor.size_id}" autocomplete="off" type="radio" value="${variantsByColor.size_id}" data-info="Talle ${variantsByColor.size_us} us - equivale a ${variantsByColor.size_arg}Arg" data-stock="Sin stock" data-class="text-danger">
        
        <span>
        ${variantsByColor.size_arg}
        <span class="us-value">
        ${variantsByColor.size_us} US
        </span>
        </span>

     </label>
  `)}
    
  container.insertAdjacentHTML('beforeend', 
    `
        <label for="sizeProduct${variantsByColor.size_id}" class="product-swatch product-swatch-size"> 
                        
            <input style="display:none;" required class="input-size" name="size_id" id="sizeProduct${variantsByColor.size_id}" autocomplete="off" type="radio" value="${variantsByColor.size_id}" data-info="Talle ${variantsByColor.size_us} US - equivale a ${variantsByColor.size_arg}Arg" data-stock="Disponible" data-class="text-succes">

            <span>
            ${variantsByColor.size_arg}
            <span class="us-value">
            ${variantsByColor.size_us} US
            </span>
            </span>

    </label>
  `)
    
}