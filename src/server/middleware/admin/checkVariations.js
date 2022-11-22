const { doQuery } = require("../../services/mysqlS/operationsMysql")


const checkDuplicates = async (req, res, next)=>{
    
    const { id_product, table, id_atributes } = req.body;
    

    const atributesArray = id_atributes.split(',');

    let errors = []
    
    await atributesArray.forEach( async e => {
        
        const checkingTable = await doQuery(`SELECT * FROM ${'products_' + table.slice(0, -6)} WHERE product_model_id = ${id_product} AND ${table.slice(0, -7) + '_id'} = ${e} ` )

        if (checkingTable.length !== 0) {

        }

        errors.push('asd')
        
        console.log(errors);
    }); 

    console.log(errors);
    return res.send('errors')

}

module.exports = checkDuplicates