
function choseSize() {

    const groupInputSize = selectHtml('.input-size', 'all')
    const groupInputColor = selectHtml('.input-color', 'all')
    const grouplabelsSize = selectHtml('.product-swatch-size', 'all')
    const grouplabelsColor = selectHtml('.product-swatch-color', 'all')

    function changeState(groupInput, groupLabel) {

        groupInput.forEach(e=>{
            
            e.addEventListener('click', (event)=>{
                const label = event.target.parentNode
                groupLabel.forEach(e => e.classList.remove('active'))
                
                label.classList.add('active')
                
            })

        })
    
    }
    
    changeState(groupInputSize, grouplabelsSize)
    changeState(groupInputColor, grouplabelsColor)


}


choseSize()