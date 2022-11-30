const { doQuery } = require('../services/mysqlS/operationsMysql');
const handleHttpError = require('../utils/handleHttpError');
const { verifyToken } = require('../utils/handleJwt');

 

const getHome = async (req, res) => {

  try {

    const products = await doQuery('SELECT products.id, title, subtitle, price, price_offer, thumbnail_image FROM products INNER JOIN products_images ON products_images.product_model_id = products.id')
    console.log(products);
    
    res.render('home', {products})

  } catch (err) {
    console.log(err);
    handleHttpError(res, err);
  }

};


module.exports = {getHome};
 