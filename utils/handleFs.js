const fs = require('fs');

const readDb = () => {
  let data = fs.readFileSync('./utils/users.json', 'utf-8');
  return JSON.parse(data);
};


const writeDb = (data) => {

    fs.writeFileSync('./utils/users.json', JSON.stringify(data, null, 2))
    
};



module.exports = {readDb, writeDb};