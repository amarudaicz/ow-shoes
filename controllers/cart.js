const productos = require('../utils/db')


const getCart = (req, res) =>{
    try {
        
        res.render('cart', {productos})
    } catch (err) {
        
    }
}

module.exports = getCart;