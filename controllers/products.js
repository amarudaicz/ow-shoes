const productos = require('../utils/db')



const getItem = (req, res) =>{
    try{
   
        const id = Number( req.params.id )

        res.render('detail', {productos, id})

    }catch(err){

    }

}





const newEntry = (req, res) =>{
    try {
        
        const {body} = req
        console.log(body);
    
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

