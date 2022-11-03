const { doQuery } = require('../services/mysqlS/operationsMysql');
const handleHttpError = require('../utils/handleHttpError');
const { verifyToken } = require('../utils/handleJwt');



const getHome = async (req, res) => {

  try {

    const products = await doQuery('SELECT * FROM products')
     
    res.render('home', {products})

  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_GET_INDEX');
  }

};


module.exports = {getHome};
 