
const showAtributes = async (params) => {
  const atributesInput = selectHtml('#atributesInput');
  const dataListAtributes = selectHtml('#listAtributes');
  let valuesInput = selectHtml('#valuesInput');
  const containerValues = selectHtml('.container-values');

  const response = await fetch('http://localhost:3000/admin/get-variations');
  const dataVariations = await response.json();
  const atributes = dataVariations.map((e) => e.atribute);

  let atributesNoDuplicate = atributes.filter(
    (item, index) => atributes.indexOf(item) === index
  );

  atributesNoDuplicate.forEach((e) => {
    const option = document.createElement('option');
    option.innerText = e; //Usar innerText
    dataListAtributes.appendChild(option);
  });

  atributesInput.addEventListener('input', () => {
    const atributeName = atributesInput.value;
    console.log(atributeName);

    const buttonsValue = selectHtml('.value-variation', true); //nodo []

    if (buttonsValue.length !== 0) {
      buttonsValue.forEach((e) => containerValues.removeChild(e));
      valuesInput.value = '';
    }

    let atributesElejidos = dataVariations.filter(
      (e) => e.atribute === atributeName
    );

    atributesElejidos.forEach((e) => {
      const value = `<input type="button" class="value-variation" value=${e.value}>`;
      containerValues.insertAdjacentHTML('afterbegin', value);
    });

    const valueVariation = selectHtml('.value-variation', true);
    valueVariation.forEach((e) => {
      e.onclick = (event) => {
        const data = event.target;
        data.classList.toggle('value-variation-active');

        if (valuesInput.value.includes(data.value)) {
          const list = valuesInput.value
            .split(',')
            .filter((e) => e !== data.value);
          valuesInput.value = list;
          return;
        }

        valuesInput.value += data.value + ',';
      };
    });
  });


  

  const btnAddVariaton2 = selectHtml('#addVariation')

  btnAddVariaton2.onclick = () => { 

    const containerValues2 = selectHtml('.container-values2')

    if (containerValues2) {
      return
    }
    

    templateChoseVariations(containerValues, 'afterend')

    const atributesInput2 = selectHtml('#atributesInput2')
    const valuesInput2 = selectHtml('#valuesInput2')

    atributesInput2.oninput = () => {
      const atributeName = atributesInput2.value;
      
      const buttonsValue = selectHtml('.value-variation2', true); //nodo []
  
      if (buttonsValue.length !== 0) {
        buttonsValue.forEach((e) => selectHtml('.container-values2').removeChild(e));
        valuesInput2.value = '';
      }
  
      let atributesElejidos = dataVariations.filter(
        e => e.atribute === atributeName
      );
  
      atributesElejidos.forEach((e) => {
        const value = `<input type="button" class="value-variation2" value=${e.value}>`;
        selectHtml('.container-values2').insertAdjacentHTML('afterbegin', value);
      });
      

      const valueVariation = selectHtml('.value-variation2', true);

      valueVariation.forEach((e) => {

        e.onclick = (event) => {
          const data = event.target;
          data.classList.toggle('value-variation-active');
  
          if (valuesInput2.value.includes(data.value)) {
            const list = valuesInput2.value
              .split(',')
              .filter((e) => e !== data.value);
              valuesInput2.value = list;
            return;
          }
  
          valuesInput2.value += data.value + ',';
        };

      });
    };
  }



};

showAtributes();
