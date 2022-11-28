

const fetchGetVariantsByColor = async (idvariant, idColor) => {

    const urlFetch = `https://ow-shoes.vercel.app/products/get-variants-bycolor?id=${idvariant}&color_id=${idColor}` ;
  
    const resServer = await fetch(urlFetch, {
  
    });
  
    return resServer.json();
  };