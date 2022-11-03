const {readFiles} = require('../mysql/config')
const { doQuery } = require('../services/mysqlS/operationsMysql');
const {verifyToken} = require('../utils/handleJwt')
const handleHttpError = require('../utils/handleHttpError');

const getItem = async (req, res) => {
    
    try{
        const {id} = req.query
     
        let  product = await doQuery('SELECT * FROM products WHERE id = ?', [id])
        product = product[0]

        const productVariants = await doQuery(`SELECT products_variants.id, stock, color, size_us, size_arg, sizes_guide.id size_id, colors_guide.id color_id FROM products_variants 
        INNER JOIN sizes_guide ON products_variants.size_id = sizes_guide.id
        INNER JOIN colors_guide ON products_variants.color_id = colors_guide.id
        WHERE product_id = ?`, [id])
        
        // res.json(productVariants)
        
        console.log(productVariants);
        res.render('detail', {
            product,
            productVariants
        })

 
    }catch(err){
        console.log(err);
        handleHttpError(res, 'ERROR_EN_DETAIL', 400)
        
    }

}


const newProduct = (req, res) =>{
    try {
        
        const {body} = req
    
        if (!body.title || !body.descripcion) {
            res.status(400).send({error:"las entradas necesitan completar los campos"})
        }


    
        let newEntry = {
            title: body.title,
            descripcion: body.descripcion,
            published: new Date()
        }
        
        tareas.push(newEntry)
    
        res.redirect('/') //redirije a la ruta /
    } catch (err) {
        
    }

}


module.exports = {getItem}

