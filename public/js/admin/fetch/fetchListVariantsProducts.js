




async function listVariants() {
    const container = document.querySelector('.table-data')
    const id = document.querySelector('#idProduct').value
    console.log(id);

    const response = await fetch(`http://localhost:3000/admin/get-products-variations?id=${id}`)
    const data = await response.json()
    console.log(data);

    templateListVariations(data, container)















}


listVariants()