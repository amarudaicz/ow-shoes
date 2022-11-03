const { pool } = require('./config');
const mysql = require('mysql');



const insertUser = (data, callback) => {
  let insertQuery = ` INSERT INTO users (name, email, age, role, password) VALUES ($1, $2 , $3 , $4 ,$5) RETURNING * `;

  let insertFormat = mysql.format(insertQuery, [
    data.user.name,
    data.user.email,
    data.user.age,
    data.user.role,
    data.user.password,
  ]);

  pool.query(insertFormat, (err, result) => {
    if (err) {
      console.log(err);
    }

    callback(result);
  });


};


const readUser = (email, callback) => {
    const readQuery = `SELECT * FROM users WHERE email = ?`;
    const formatRead = mysql.format(readQuery, [email])

  pool.query(formatRead, (err, result) => {
    if (err) {
      console.log(err);
    }

    callback(result);
  });

};




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



module.exports = { insertUser, readUser, doQuery };
