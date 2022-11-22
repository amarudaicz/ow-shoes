const { doQuery } = require('../services/mysqlS/operationsMysql');
const handleHttpError = require('../utils/handleHttpError');

const getItem = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id);

    let product = await doQuery('SELECT products.id, title, subtitle, price, price_offer, descripcion_1, descripcion_2, detail_images, thumbnail_image FROM products INNER JOIN products_images ON products_images.product_model_id = products.id WHERE products.id = ?', [id]);
    product = product[0]
    product.detail_images = JSON.parse(product.detail_images) 
    
    console.log(product);
 
    const colorSwatches = await doQuery(
      `SELECT * FROM products_colors INNER JOIN colors_guide ON colors_guide.id = products_colors.color_id WHERE product_model_id = ? ;`,
      [id]
    );

  
    res.render('detail', {
      product,
      colorSwatches,
    });

     

  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_DETAIL', 400);
  }
};
 

const getVariantsByColor = async (req, res) => {
  try {

    const {id, color_id} = req.query
    console.log(id);

    const variants = await doQuery(`SELECT * FROM products_variants INNER JOIN sizes_guide on sizes_guide.id = products_variants.size_id WHERE product_id = ? AND color_id = ?  ORDER BY size_id ASC`, [id, color_id])
    
    console.log(variants);
    res.json(variants)

  } catch (err) {
    handleHttpError(res, err, 400);
  }
};



module.exports = { getItem,getVariantsByColor };
