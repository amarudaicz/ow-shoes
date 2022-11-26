const mysql = require('mysql');

const pool = mysql.createPool({

  connectionLimit:10,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host:process.env.DB_HOST ,
  port:process.env.DB_PORT

});



pool.getConnection((err) => {
if (err) {
  console.log(err);
  return;
}
console.log('R');
});



 


module.exports = {pool};
