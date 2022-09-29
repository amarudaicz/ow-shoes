const fs = require('fs');
const { encrypt, compare } = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt');
const  handleHttpError  = require('../utils/handleHttpError');
const { readDb, writeDb } = require('../utils/handleFs');
const { log } = require('console');
const { emitWarning } = require('process');

const getLogin = (req, res) => {
  res.render('login', { autorized: true });
};

const getRegister = (req, res)=>{

  res.render('register')

}

const registerControl = async (req, res) => {
  try {
    let { body } = req;
    
    const password = await encrypt(body.password);
    // let users = fs.readFileSync('./utils/users.json', 'utf-8');
    // let usersParse = JSON.parse(users);
    let users = readDb();
    console.log(users);

    let newUser = {
      nombre: body.nombre,
      email: body.email,
      edad:body.edad,
      id: body.id,
      role: "user",
      password,
      auth: true,
    };

    const data = {
      token: tokenSign(newUser),
      user: newUser,
    };

    users.push(data);

    // fs.writeFileSync('./utils/users.json', JSON.stringify(usersParse, null, 2));
    writeDb(users);

    res.send(data);
  } catch (err) {
    handleHttpError(res, 'ERROR_EN_REGISTER_CONTROL');
  }
};

const getUsers = (req, res) => {
  try {
    const users = fs.readFileSync('./utils/users.json', 'utf-8');

    res.setHeader('contentType', 'text/json');
    res.send(users);
  } catch (err) {
    handleHttpError(res, 'ERROR_EN_GET_USERS');
  }
};

const loginControl = async (req, res) => {
  try {
    const { body } = req;

    let users = readDb();

    users.forEach( async (element, i, thisArg) => {
      if (element.user.email === body.email) {
        const hashPassword = element.user.password;

        const check = await compare(body.password, hashPassword); //DEVUELVE TRUE SI LA COMPARACION ES EXITOSA
 
        if (!check) {
          handleHttpError(res, 'PASSWORD_INVALID', 401);
          return;

        }else{

          const data = {
            token: tokenSign(element.user),
            user:element.user
          };
  
          res.redirect('/home')
        }

      }
    });


  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_LOGIN_CONTROL');
  }
};

module.exports = { getLogin, getUsers, registerControl,getRegister, loginControl };
