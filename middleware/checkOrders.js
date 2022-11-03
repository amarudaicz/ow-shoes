const { doQuery } = require('../services/mysqlS/operationsMysql');

const checkOrders = async (req, res, next) => {

  const user = req.user;
  const {orderId} = req.cookies 

  
  if (orderId) {
    req.orderId = orderId
    return next()
  }

  const newOrder = await doQuery(
    'INSERT INTO orders (user_id, status) VALUES (?, ?)',
    [user.id, 'process']
  );

  req.orderId = newOrder.insertId;
  res.cookie('orderId', newOrder.insertId, {} )
  
  next();
};

module.exports = { checkOrders };
