
const {DB_PORT, DB_HOST, DB_PASSWORD,DB_PORT,DB_USER, DB_NAME} = require('../../config')
const mysql = require('mysql');

const pool = mysql.createPool({

  connectionLimit:10,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host:DB_HOST ,
  port:DB_PORT
});



pool.getConnection((err) => {
if (err) {
  console.log(err);
  return;
}
console.log('R');
});



 


module.exports = {pool};
