const { readDb } = require('./handleFs');

const identificarUser = (req, id) => {
  const users = readDb();

  users.forEach((element) => {
    if (element.user.id === id) {
      req.user = element;
    }
  });
};

module.exports = identificarUser;
