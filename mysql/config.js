



const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit:10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ow_shoes',
});



pool.getConnection((err) => {
if (err) {
  console.log(err);
  return;
}
console.log('R');
});



 



module.exports = {pool};
