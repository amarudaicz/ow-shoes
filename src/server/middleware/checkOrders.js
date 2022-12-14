const { doQuery } = require('../services/mysqlS/operationsMysql');


const checkOrders = async (req, res, next) => {
  try {
    const user = req.user;
    
    const order = await doQuery('SELECT * FROM orders WHERE user_id = ? and status = "current" ', [user.id])
    
    if (order[0]) {
      req.orderId = order[0].id;
      return next();
    }
  
    
    const newOrder = await doQuery(
      'INSERT INTO orders (id, user_id, status, date, total) VALUES (?, ?, ?, ?, ?)',
      [1 , user.id, 'current', new Date(1999,11,10), 0]
    );
    
    req.orderId = newOrder.insertId;
  
    next();
    
  } catch (err) {
    res.json({error:err})
  }
};

module.exports = { checkOrders };


