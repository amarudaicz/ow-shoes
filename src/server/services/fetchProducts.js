
const fetchGetVariantsByColor = async (idvariant, idColor) => {

    const urlFetch = urlHost + `products/get-variants-bycolor?id=${idvariant}&color_id=${idColor}` ;
  
    const resServer = await fetch(urlFetch, {
  
    });
  
    return resServer.json();
  };