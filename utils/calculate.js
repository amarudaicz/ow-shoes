

module.exports = (age) => {
  let currentYear = new Date().getFullYear();
  let yearUser = parseInt(age.split('-', 1));
  age = currentYear - yearUser;
  return age;
};
