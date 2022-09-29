const productos = require('../utils/db')


const getIndex = (req, res) =>{
    try {
        
        res.render('index', {productos})
    } catch (err) {
        
    }
}

module.exports = getIndex;