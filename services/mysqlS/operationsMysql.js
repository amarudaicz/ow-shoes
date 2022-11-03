const { pool } = require('../../mysql/config');
const mysql = require('mysql');



const insertProductService = (item, callback) => {

  try {

    pool.getConnection((err, conn)=>{
      
      let queryInsert = `INSERT INTO products (title, subtitle, price, price_offer, stock ,descripcion_1, descripcion_2, sizes, images) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
      const insertFormat = mysql.format(queryInsert, [
        item.title,
        item.subtitle,
        item.price,
        item.priceOffer,
        item.stock,
        item.description1,
        item.description2,
        item.sizes,
        item.images,
      ]);
  
      pool.query(insertFormat, (err, result) => {
        if (err) {
          console.log(err);
        }
  
        callback(result);

      })
      

      conn.release()

    });


  } catch (err) {}


};








const deleteProductService = (idProduct, callback) => {
  try {
    pool.getConnection((err, conn) => {
      let deleteQuery = `DELETE FROM products WHERE id = ${idProduct}`;

      pool.query(deleteQuery, (err, result) => {
        if (err) {
          console.log(err);
        }

        callback(result);

      });


      conn.release();


    });
  } catch (err) {
    throw new Error('Error al conectar con la base');
  }
};





const getListProductsService = (callback) => {
  try {
    pool.getConnection((err, conn) => {

      let getQuery = 'SELECT * FROM products';

      pool.query(getQuery, (err, result) => {
        if (err) {
          console.log(err);
        }

        callback(result);

      });


      conn.release();
    
    });
  } catch (err) {}
};






const getProductService = (id, callback) => {
  try {
    let getQuery = `SELECT * FROM products WHERE id = ${id}`;
    pool.getConnection((err, conn) => {
      if (err) {
        return;
      }

      pool.query(getQuery, (err, result) => {
        if (err) {
          console.log(err);
        }

        callback(result);

      });

      conn.release();


    });
  } catch (err) {}
};




const updateProductService = (id, data, callback) => {
  try {

    pool.getConnection((err, conn)=>{

      let updateQuery = `UPDATE products SET title = ?, subtitle = ?, price = ?, price_offer = ?, stock = ?, descripcion_1 = ?, descripcion_2 = ? , sizes = ? , images = ? WHERE id = ${id}`;
  
      let formatQuery = mysql.format(updateQuery, [
        data.title,
        data.subtitle,
        data.price,
        data.price_offer,
        data.stock,
        data.descripcion_1,
        data.descripcion_2,
        data.sizes,
        data.images,
      ]);
  
      pool.query(formatQuery, (err, result) => {
        if (err) {
          console.log(err);
        }
  
        callback(result);
  
      });

      conn.release()
    })


  } catch (err) {}
};




const insertVariationService = (data, callback) => { 

  try {
    
    const insertQuery = `INSERT INTO product_variations (sku, id_product, size, color, price) VALUES(? ? ? ?)`
    const insertFormat = mysql.format(insertQuery, [
      data.sku,
      data.id_product,
      data.size,
      data.color,
      data.price
    ])


    pool.getConnection((err, conn)=>{
      pool.query(insertFormat, (err, result)=>{


        callback(result)


      })

      conn.release()
    })

  } catch (err) {
    


  }
}



const doQuery = (query, data) => {

  return new Promise((resolve, reject) => {

    const formatQuery = mysql.format(query, data)
    
    pool.query(formatQuery, (error, results, fields) => {

      if(error) return reject(error); // <- se rechaza la promesa y se pasa el motivo

      console.log('Query correcto.'); // mensaje de control

      return resolve(results); // <- se resuelve la Promesa y se pasa el resultado

    });

  });
}





module.exports = {
  insertProductService,
  getProductService,
  getListProductsService,
  deleteProductService,
  updateProductService,
  insertVariationService,
  doQuery
};
