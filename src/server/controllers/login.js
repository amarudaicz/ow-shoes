const { encrypt, compare } = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt');
const handleHttpError = require('../utils/handleHttpError');
const { compareSync } = require('bcryptjs');
const { doQuery } = require('../mysql/login');
const {calculateAge} = require('../utils/calculate');




const getLogin = (req, res) => {

  res.render('login');

};


const getRegister = (req, res) => {

  res.render('register');
};



const isAuth = (req, res)=>{
  try {
    
    res.json(true)
    
  } catch (err) {
    
    console.log(err);
    res.status(500).send('Server error');

  }
}




const registerControl = async (req, res) => {
  try {

    const { name, email, password, age } = req.body;

    const query = `SELECT * FROM users WHERE email = ? `;
    const user = await doQuery(query, email);

    if (user.length !== 0) 
    return handleHttpError(res, 'User already exists', 401);

    const passwordHash = await encrypt(password);

    const insertQuery = `INSERT INTO users (name, email, age, role, password) VALUES (?, ?, ?, ?, ?);`;
    const newUser = await doQuery(insertQuery, [
      name,
      email,
      calculateAge(age),
      'user',
      passwordHash,
    ]);

    const succes = 'Usuario registrado correctamente '

    const payload = {
      id:newUser.insertId,
      name
    }

    const token = tokenSign(payload);
    
    res.json({ token, succes});

  } catch (err) {
    console.log(err);
    handleHttpError(res, err);
  }
};




const loginControl = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await doQuery(`SELECT * FROM users WHERE email = ? OR name = ? ; `, [email, email]);

    if (user.length === 0) 
    return handleHttpError(res, 'Email or user invalid')
  
    const hashPassword = user[0].password;
    const checkPassword = compareSync(password, hashPassword); //DEVUELVE TRUE SI LA COMPARACION ES EXITOSA

    if (!checkPassword)
    return handleHttpError(res, 'Contraseña Incorrecta', 401);
      
    const payload = {
      id:user[0].id,
      name:user[0].name
    }

    const token = tokenSign(payload)

    res.cookie('token.ow', token, {})

    res.json({token, log:true});

  } catch (err) {

    console.log(err);
    handleHttpError(res, err);

  }
};





const getUser = (req, res) => {
  try {
    
    const {user} = req

    res.json(user)

  } catch (err) {
    handleHttpError(res, err);
  }
};



module.exports = {
  getLogin,
  getUser,
  registerControl,
  getRegister,
  loginControl,
  isAuth
};
