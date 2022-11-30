

const fetchGetProductsModels = async () => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/list-products `;

  const res = await fetch(urlFetch, {
    method: 'GET',
  });

  return res.json();
};

const fetchGetAtributesValues = async (table) => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/get-guide-values/${table}`;

  const res = await fetch(urlFetch, {

  });

  return res.json();
};

const fetchGetProductsVariations = async (id) => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/get-products-variations?id=${id}`;

  const res = await fetch(urlFetch, {

  });

  return res.json();
};


const fetchGetSizesProductModel = async (idProductModel) => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/get-sizes-product-model?id=${idProductModel} `;

  const res = await fetch(urlFetch, {
    method: 'GET',
  });

  return res.json();
};


const fetchGetColorsProductModel = async (idProductModel) => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/get-colors-product-model?id=${idProductModel} `;

  const res = await fetch(urlFetch, {
    method: 'GET',
  });

  return res.json();
};


const fetchInsertProduct = async (dataForm) => {
  const urlFetch =  `https://ow-shoes.vercel.app/admin/insert-product`;

  const res = await fetch(urlFetch, {
    method: 'POST',
    body:dataForm,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    
    
  });

  return res.json();
};


const fetchDeleteProduct = async (idProduct) => {
  const urlFetch =  `https://ow-shoes.vercel.app/admin/delete-product/${idProduct}`;

  const res = await fetch(urlFetch, {
    method: 'DELETE',
  });

  return res.json();
};


const fetchUpdateProductModel = async (data) => {
  const urlFetch = `https://ow-shoes.vercel.app/admin/update-product-model`;

  const res = await fetch(urlFetch, {
    headers:{
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body:data
  });

  return res.json();
};




const fetchInsertVariants = async (data) => {
  const urlFetch = 'https://ow-shoes.vercel.app/admin/insert-variations';

  const res = await fetch(urlFetch, {
    headers:{
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body:data

  });

  return res.json();
};

const fetchGetFilterVariants = async (productId, attribute, value ) => {

  const urlFetch = `https://ow-shoes.vercel.app/admin/get-filter-variants?product_id=${productId}&attribute=${attribute}&value=${value}` ;

  const res = await fetch(urlFetch, {


  });

  return res.json();
};



const fetchDeleteProductVariant = async (idvariant) => {

  const urlFetch = `https://ow-shoes.vercel.app/admin/delete-product-variant/${idvariant}` ;

  const res = await fetch(urlFetch, {
    method:'DELETE'

  });

  return res.json();
};


const fetchEditProductVariant = async (idvariant, newPrice, newStock) => {

  const urlFetch = `https://ow-shoes.vercel.app/admin/edit-product-variant?idVariant=${idvariant}&price=${newPrice}&stock=${newStock}` ;

  const res = await fetch(urlFetch, {
    method:'PUT'

  });

  return res.json();
};



