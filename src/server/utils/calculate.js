

const calculateAge = (age) => {
  let currentYear = new Date().getFullYear();
  let yearUser = parseInt(age.split('/', 1));
  age = currentYear - yearUser;
  return age;
};


const maxArray = (a, b) => {
  if (a.length > b.length) {
    return a
  }else{
    return b
  }
}

const minArray = (a, b) => {
  if (a.length > b.length) {
    return b
  }else{
    return a
  }
}

module.exports = {maxArray, minArray,calculateAge}
