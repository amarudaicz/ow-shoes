const {
  insertProductService,
  deleteProductService,
  getListProductsService,
  getProductService,
  updateProductService,
  insertVariationService,
} = require('../services/mysqlS/operationsMysql');

const insertProductAdmin = (item, callback) => {
  insertProductService(item, callback);
};

const deleteProductAdmin = (idProduct, callback) => {
  try {
    deleteProductService(idProduct, callback);
  } catch (err) {}
};

const getListProducts = (callback) => {
  try {
    getListProductsService(callback);
  } catch (err) {}
};

const getProduct = (id, callback) => {
  try {
    getProductService(id, callback);
  } catch (err) {}
};

const updateProduct = (id, data, callback) => {
  try {
    data.images = JSON.stringify(data.images);

    updateProductService(id, data, callback);
  } catch (err) {}
};

const insertVariaton = (data, callback) => {
  insertVariationService(data, callback);
};

module.exports = {
  insertProductAdmin,
  getListProducts,
  getProduct,
  deleteProductAdmin,
  updateProduct,
  insertVariaton,
};
