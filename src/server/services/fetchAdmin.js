
const fetchGetProductsModels = async () => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/list-products `;

  const resServer = await fetch(urlFetch, {
    method: 'GET',
  });

  return resServer.json();
};

const fetchGetAtributesValues = async (table) => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/get-guide-values/${table}`;

  const resServer = await fetch(urlFetch, {

  });

  return resServer.json();
};

const fetchGetProductsVariations = async (id) => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/get-products-variations?id=${id}`;

  const resServer = await fetch(urlFetch, {

  });

  return resServer.json();
};


const fetchGetSizesProductModel = async (idProductModel) => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/get-sizes-product-model?id=${idProductModel} `;

  const resServer = await fetch(urlFetch, {
    method: 'GET',
  });

  return resServer.json();
};


const fetchGetColorsProductModel = async (idProductModel) => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/get-colors-product-model?id=${idProductModel} `;

  const resServer = await fetch(urlFetch, {
    method: 'GET',
  });

  return resServer.json();
};


const fetchInsertProduct = async (dataForm) => {
  const urlFetch = ` https://ow-shoes.vercel.app/admin/insert-product`;

  const resServer = await fetch(urlFetch, {
    method: 'POST',
    body:dataForm,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    
    
  });

  return resServer.json();
};


const fetchDeleteProduct = async (idProduct) => {
  const urlFetch = ` https://ow-shoes.vercel.app/admin/delete-product/${idProduct}`;

  const resServer = await fetch(urlFetch, {
    method: 'DELETE',
  });

  return resServer.json();
};


const fetchUpdateProductModel = async (data) => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/update-product-model`;

  const resServer = await fetch(urlFetch, {
    headers:{
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body:data
  });

  return resServer.json();
};




const fetchInsertVariants = async (data) => {
  const urlFetch = 'https://ow-shoes.vercel.app/admin/insert-variations';

  const resServer = await fetch(urlFetch, {
    headers:{
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body:data

  });

  return resServer.json();
};

const fetchGetFilterVariants = async (productId, attribute, value ) => {

  const urlFetch = `https://ow-shoes.vercel.app/admin/get-filter-variants?product_id=${productId}&attribute=${attribute}&value=${value}` ;

  const resServer = await fetch(urlFetch, {


  });

  return resServer.json();
};



const fetchDeleteProductVariant = async (idvariant) => {

  const urlFetch = `https://ow-shoes.vercel.app/admin/delete-product-variant/${idvariant}` ;

  const resServer = await fetch(urlFetch, {
    method:'DELETE'

  });

  return resServer.json();
};


const fetchEditProductVariant = async (idvariant, newPrice, newStock) => {

  const urlFetch = `https://ow-shoes.vercel.app/admin/edit-product-variant?idVariant=${idvariant}&price=${newPrice}&stock=${newStock}` ;

  const resServer = await fetch(urlFetch, {
    method:'put'

  });

  return resServer.json();
};



