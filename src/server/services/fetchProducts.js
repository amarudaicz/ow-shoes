
const fetchGetVariantsByColor = async (idvariant, idColor) => {

    const urlFetch = `http://localhost:3000/products/get-variants-bycolor?id=${idvariant}&color_id=${idColor}` ;
  
    const resServer = await fetch(urlFetch, {
  
    });
  
    return resServer.json();
  };