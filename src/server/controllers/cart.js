const handleHttpError = require('../utils/handleHttpError');

const { doQuery } = require('../services/mysqlS/operationsMysql');


const getCartByUser = async (req, res) => {
  try {

    const orderId = req.orderId;
    
    const orderDetails = await doQuery(
      `SELECT title, subtitle, order_details.price, order_details.id, size_us, size_arg, quantity, thumbnail_image FROM products
      INNER JOIN order_details ON order_details.product_model_id = products.id 
      INNER JOIN products_images ON products_images.product_model_id = order_details.product_model_id
      INNER JOIN products_variants ON products_variants.id = order_details.product_variant_id
      INNER JOIN sizes_guide ON sizes_guide.id = products_variants.size_id
      WHERE order_id = ? `,
      [orderId]
    );
    
    if (orderDetails.length === 0)
    return res.json({ errors: 'Parece que no hay productos en tu carrito!' });

    res.json(orderDetails);
    
  } catch (err) {
    console.log(err);
    handleHttpError(res, err);
  }
};


const insertItemCart = async (req, res) => {
  try {
    console.log({esto:req.body});

    const { color_id, size_id, productModelId, quantity } = req.body;
    const { orderId } = req;

    const productVariant = await doQuery('SELECT * FROM products_variants WHERE size_id = ? AND color_id = ? ;', [
      size_id, color_id
    ]);

    const order = await doQuery('SELECT total FROM orders WHERE id = ?;', [
      orderId,
    ]);

    const updateTotal = doQuery(`UPDATE orders SET total = ? WHERE id = ? ;`, [
      order[0].total + productVariant[0].price * quantity,
      orderId,
    ]);

    const order_detail = await doQuery(
      'INSERT INTO order_details ( order_id, product_variant_id, product_model_id, price, quantity ) VALUES (?, ?, ?, ?, ?)',[
      orderId, productVariant[0].id , productModelId, productVariant[0].price, quantity
    ]);

    res.json('Producto agregado correctamente');

  } catch (err) {
    console.log(err);
    handleHttpError(res, err);
  }
};

const deleteItemCart = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const data = await doQuery('DELETE FROM order_details WHERE id = ?', [id]);

    console.log(data);
    res.json('Producto eliminado');
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_DELETE_PRODUCT');
  }
};


const assignOrder = async (req, res) => {
  try {
 
    res.json(req.orderId);

  } catch (err) {
    console.log(err);
    handleHttpError(res, err);
  }
};

module.exports = { getCartByUser, insertItemCart, deleteItemCart, assignOrder };
