



function templateChoseVariations(container, position) {
    
    container.insertAdjacentHTML(position, 
      `<div class="form-group">
          <label for="">Elejir atributo</label>
          <input
            type="text"
            multiple
            placeholder="Elejir terminos"
            name="atribute"
            list="listAtributes"
            id="atributesInput2"
            class=""
          />
          <datalist id="listAtributes"></datalist>
        </div>

    
      <div class="form-group">
        <label for="values">Elejir valores</label>
        <input
          type="text"
          hidden
          placeholder="Valores"
          name="values"
          id="valuesInput2"
          class=""
        />

        <div class="container-values2"></div>
      </div>`
    )
}