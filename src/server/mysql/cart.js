const { pool } = require('./config');
const mysql = require('mysql');


const selectCart = (id, callback) => {

  const selectUser = `SELECT cart FROM users WHERE id_user = "${id}"`;

  pool.query(selectUser, (err, result) => {
    
    if (err) {
     console.log(err);
    }


    callback(result)

  });
};


const insertItem = (id, item, callback) => {

  const insertProduct = `UPDATE users SET cart = ? WHERE id_user = "${id}" `;
  
  const insertFormat = mysql.format(insertProduct, [item])
  pool.query(insertFormat, (err, result) => {
    if (err) {
        console.log(err);
    }

    
    callback(result)

  });
};


const readItem = (tabla, idItem ,callback) => {
  let querySelect = `SELECT * FROM ${tabla} WHERE id = ${idItem}`;

  pool.query(querySelect, (err, result) => {
    if (err) {
      console.log(err);
    }

    callback(result);
  });
};


const deleteItem = (cartUpdated, idUser, callback) => {
  let deleteQuery = `UPDATE users SET cart = ? WHERE id_user = "${idUser}"`;
  let deleteFormat = mysql.format(deleteQuery, [cartUpdated])

  pool.query(deleteFormat, (err, result) => {
    if (err) {
      console.log(err);
    }

    callback(result);
  });
};




module.exports = {selectCart, insertItem, readItem, deleteItem}