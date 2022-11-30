const mysql = require('mysql2');

const pool = mysql.createPool({

  connectionLimit:10,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ow_shoes',
  host:process.env.DB_HOST || 'localhost' ,
  port:process.env.DB_PORT,
  
});

 

pool.getConnection((err) => {
if (err) {
  console.log(err);
  return;
}
console.log('R');
});



 


module.exports = {pool};
