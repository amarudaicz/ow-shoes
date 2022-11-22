



function templateChoseVariations(container, position) {
    
    container.insertAdjacentHTML(position, 

      `
      <div class="form-group">

        <label>Elejir los colores para este producto</label>

        <div class="container-values" id="container-colors"> </div>
        
      </div>

          

      `
    )
}