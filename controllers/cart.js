const handleHttpError = require('../utils/handleHttpError');
const { verifyToken } = require('../utils/handleJwt');
const {
  selectCart,
  insertItem,
  readItem,
  deleteItem,
} = require('../mysql/cart');
const { doQuery } = require('../services/mysqlS/operationsMysql');


const getCartByUser = async (req, res) => {

  try {

    const orderId = req.orderId;
    console.log(orderId);

    const orderDetails = await doQuery(
      `SELECT * FROM products
      INNER JOIN order_details ON order_details.product_model_id = products.id WHERE order_id = ?`,
      [orderId]
    );

    if (orderDetails.length === 0)
    return res.json({errors : 'Parece que no hay productos en tu carrito!'})


    res.json(orderDetails);

  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_GET_CART');
  }
};

const insertItemCart = async (req, res) => {
  try {
    const data = req.body;
    const {orderId} = req.cookies;
    console.log(orderId);
    console.log(data);

 
    // const product = await doQuery('SELECT * FROM products WHERE id = ?', [
    //   data.id,
    // ]);

    // console.log(product);
    // const order_detail = await doQuery(
    //   ' INSERT INTO order_details ( order_id, product_id, price, quantity ) VALUES (?, ?, ?, ?)',
    //   [orderId, product[0].id, product[0].price, 1]
    // );

    // console.log(order_detail);
    
    res.json(data);

  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_BUY_PRODUCT');
  }
};



const deleteItemCart =  async (req, res) => {
  try {

    const { id } = req.params;
    console.log(id);

    const data = await doQuery('DELETE FROM order_details WHERE id = ?', [id])


    console.log(data);
    res.json('Producto eliminado')
    
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_DELETE_PRODUCT');
  }
};



const getDataCart = (req, res) => {
  try {
    const { user } = req.cookies;
    console.log(user);
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_GET_DATA_CART');
  }
};



module.exports = { getCartByUser, insertItemCart, deleteItemCart, getDataCart };
