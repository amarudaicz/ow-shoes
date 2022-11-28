const { doQuery } = require('../services/mysqlS/operationsMysql');


const checkOrders = async (req, res, next) => {
  try {
    const user = req.user;
    
    // const order = await doQuery('SELECT * FROM orders WHERE user_id = ? and status = "current" ', [user.id])
    
    // if (order[0]) {
    //   req.orderId = order[0].id;
    //   console.log('has order');
    //   return next();
    // }
  
  
    const newOrder = await doQuery(
      'INSERT INTO orders (user_id, status, date) VALUES (?, ?, ?)',
      [user.id, 'current', '10-11-2000']
    );
    
    req.orderId = newOrder.insertId;
  
    next();
    
  } catch (err) {
    res.json({error:err})
  }
};

module.exports = { checkOrders };


