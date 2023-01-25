const handleHttpError = require('../utils/handleHttpError');
const { verifyToken } = require('../utils/handleJwt');
const { doQuery } = require('../services/mysqlS/operationsMysql');
const { maxArray, minArray } = require('../utils/calculate');

const {
  insertProductAdmin,
  deleteProductAdmin,
  getListProducts,
  getProduct,
  updateProduct,
  insertVariaton,
} = require('../mysql/admin');


const getAdminPanel = (req, res) => {
  try {
    const user = 'amaru';
    const page = 'home';


    res.render('admin', { user, page });
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_GET_ADMIN_PANEL');
  }
};



const getProductsPanel = (req, res) => {
  try {
    const page = 'products-panel';

    res.render('admin', { page });
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_GET_PRODUCT_PANEL');
  }
};




const InsertProduct = async (req, res) => {

  try {

    const {form, imagesGalery, imageThumbnail} = req.body
    const {
      title,
      subtitle,
      price,
      priceOffer,
      description,

    } = form;

    console.log(req.body);

    const newProduct = await doQuery(
      'INSERT INTO products (title, subtitle, price, price_offer, descripcion_1) VALUES (?,?,?,?,?)',
      [title, subtitle, price, priceOffer, description]
    );
 
   
    await doQuery(
      'INSERT INTO products_images (product_model_id, detail_images, thumbnail_image ) VALUES (?, ?, ?)', //VER TABLA PHPMYADMIN
      [newProduct.insertId, imagesGalery, imageThumbnail]
    )

    res.status(202).json({message:'Producto creado correctamente'})
  
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'A ocurrido un error', 403)

  }
};


const uploadThumbanail = async (req,res)=>{

  try {

    // const {file} = req
    // const {id} = req.body

    // console.log(file);

    // await doQuery(
    //   'UPDATE products_images SET thumbnail_image = ?  WHERE product_model_id = ?',
    //   [file.filename, id]
    // )

    res.redirect('back')

  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_UPLOAD_THUMMBNAIL')
  }

}


const uploadDetailImages = async (req,res)=>{

  try {

    const {files} = req
    const {id} = req.body
    const images = files.map(f => f.filename)

    await doQuery(
      'UPDATE products_images SET detail_images = ?  WHERE product_model_id = ?',
      [JSON.stringify(images), id]
    )

    res.redirect('back')

  } catch (err) {
    handleHttpError(res, 'ERROR_EN_UPLOAD_DETAIL')
  }

}



 
 

const deleteProduct = async ({params}, res) => {
  try {
    const { id } = params;
    console.log(id);
    await doQuery('DELETE FROM products_colors WHERE product_model_id = ?', [parseInt(id) ])
    await doQuery(`DELETE FROM products WHERE id = ?`, [parseInt(id)])

    res.json('Producto eliminado')
  
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_DELETE_PRODUCT');
  }
};



const updateProductCtrl = async (req, res) => {
  try {

    const {form, imagesGalery, imageThumbnail, id} = req.body
    const {
      title,
      subtitle,
      price,
      priceOffer,
      description,  

    } = form;

    console.log(req.body)
    const updateQuery = await doQuery(
      'UPDATE products SET title = ?, subtitle = ?, price = ? , price_offer = ?, descripcion_1 = ?  WHERE id = ? ;',
      [
        title,
        subtitle,
        price,
        priceOffer,
        description,
        id, 
      ]
    );
 
    await doQuery(
      'UPDATE products_images SET detail_images = ?, thumbnail_image = ? WHERE product_model_id = ?', //VER TABLA PHPMYADMIN
      [imagesGalery, imageThumbnail, id]
    )

    


    res.send(updateQuery);
  } catch (err) {
    handleHttpError(res, 'ERROR_EN_EDIT_PRODUCT');
  }
};





const getProductsModels = async (req, res) => {
  try {
    const productsModels = await doQuery('SELECT * FROM products');

    res.json(productsModels);
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_GET_LIST_PRODUCTS');
  }
};


 
const getProductCtrl = async (req, res) => {
  try {
    const id = req.query.id;

    let product = await doQuery('SELECT products.id, title, subtitle, price, price_offer, descripcion_1, descripcion_2, detail_images, thumbnail_image FROM products INNER JOIN products_images ON products_images.product_model_id = products.id WHERE products.id = ?', [id]);
    product = product[0]
    product.detail_images = JSON.parse(product.detail_images) 
 
    console.log(product);


    res.render('edit-product', {
      product,
    });
  
  } catch (err) {
    handleHttpError(res, 'ERROR_EN_GET_PRODUCT');
  }
};





const insertVariations = async (req, res) => {
  try {

    const { product_id, valueSizes, valueColors } = req.body;
    console.log(req.body.valueSizes)

     
    // const sizesValues = valueSizes.split(','); // [15,14,13]
    // const colorsValues = valueColors.split(','); // [2,3]

    const productModel = await doQuery('SELECT * FROM products WHERE id = ?', [
      product_id,
    ]);

    valueSizes.forEach(async (element) => {

      const checkingTableSizes = await doQuery(`SELECT * FROM products_sizes WHERE product_model_id = ${product_id} AND size_id = ${element} `);

      if (checkingTableSizes.length === 0) {
       const insertOperation = await doQuery(`INSERT INTO products_sizes (product_model_id, size_id) VALUES (? , ?); `,[product_id, element]);
      }


    });

    valueColors.forEach(async (color) => {

      const checkingTableColors = await doQuery(
        `SELECT * FROM products_colors WHERE product_model_id = ${product_id} AND color_id = ${color} `
      );

      if (checkingTableColors.length === 0) {
        await doQuery(
          `INSERT INTO products_colors (product_model_id, color_id) VALUES (? , ?);`,
          [product_id, color]
        );

      }

      valueSizes.forEach( async size =>{

        const checkingVariants = await doQuery(`SELECT * FROM products_variants WHERE product_id = ${product_id} AND size_id = ${size} AND color_id = ${color}`);

        if (checkingVariants.length === 0 ) {

          const insertOperation = await doQuery(`INSERT INTO products_variants (product_id, size_id, color_id, price, sku, stock) VALUES (?, ?, ?, ?, ?, ?);`, [product_id, size, color, productModel[0].price ,productModel[0].title.replace(' ', '-') + '-' +`T${size}`+ '-' + `C${color}`, 1 ])
          
          
        }
        

      })


      
    });

    
    res.json({succes:'Variaciones creadas con exito'});

  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_INSERT_VARIATION');
  }
};



const getGuideValues = async (req, res) => {
  try {
    const { table } = req.params;
    const values = await doQuery(`SELECT * FROM ${table}`);

    res.json(values);
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_GET_VARIATIONS_VALUES');
  }
};



const getProductsVariations = async (req, res) => {
  try {
    const { id } = req.query;

    console.log(id);
    const productsVariants = await doQuery(
      `SELECT stock, sku, size_arg, color_arg, products_variants.id, products_variants.price  FROM products_variants 
      INNER JOIN products ON products.id = products_variants.product_id 
      INNER JOIN sizes_guide ON sizes_guide.id = products_variants.size_id 
      INNER JOIN colors_guide ON colors_guide.id = products_variants.color_id 
      WHERE product_id = ? ORDER BY products_variants.color_id ASC`,
      [id]
    );


    res.json(productsVariants);
        
    

  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_GET_PRODUCTS_VARIATIONS');
  }
};




//PASAR A CONTROLER DE PRODUCTS
const getProductModel = async (req, res) => {
  try {
    const { id } = req.query;

    const productModel = await doQuery('SELECT * FROM products WHERE id = ? ', [
      id,
    ]);

    res.send(productModel);
  } catch (err) {
    handleHttpError(res, 'ERROR_EN_GET_PRODUCT_MODEL');
  }
};




const getSizesProductModel = async (req, res) => {
  try {
    const { id } = req.query;
    const sizesProduct = await doQuery(
      'SELECT * FROM products_sizes INNER JOIN sizes_guide ON sizes_guide.id = products_sizes.size_id WHERE product_model_id = ?',
      [id]
    );

    const sizesFormat = sizesProduct
      .map((e) => e.size_arg)
      .sort((a, b) => a - b)
      .join(' - ');

    res.json(sizesFormat);
  } catch (err) {}
};



const getColorsProductModel = async (req, res) => {
  try {
    const { id } = req.query;

    const colorsProduct = await doQuery(
      'SELECT * FROM products_colors INNER JOIN colors_guide ON colors_guide.id = products_colors.color_id WHERE product_model_id = ?',
      [id]
    );

    const colorsFormat = colorsProduct
      .map((e) => e.color_arg)
      .sort((a, b) => a - b)
      .join(' - ');

    res.json(colorsFormat);
  } catch (err) {}
};




const filterVariants = async (req,res)=>{

    try {
      const {product_id, attribute, value} = req.query
      
  
      if (attribute === 'colors_guide' || attribute === 'sizes_guide') {
        
      
        const listFiltredByGuide = await doQuery(
          `SELECT stock, sku, size_arg, color_arg, products_variants.id, products_variants.price FROM products_variants 
          INNER JOIN products ON products.id = products_variants.product_id 
          INNER JOIN sizes_guide ON sizes_guide.id = products_variants.size_id 
          INNER JOIN colors_guide ON colors_guide.id = products_variants.color_id 
          WHERE product_id = ${product_id} AND ${attribute}.${attribute.slice(0, -7) + '_arg'} = "${value}"`
        )
  
        if (listFiltredByGuide.length === 0 ) {
          return res.json({error:'No se encontraron productos'})
        }
    
        return res.json(listFiltredByGuide)
        
  
      }
   
      const listFiltred = await doQuery(
        `SELECT stock, sku, size_arg, color_arg, products_variants.id, products_variants.price FROM products_variants 
        INNER JOIN products ON products.id = products_variants.product_id 
        INNER JOIN sizes_guide ON sizes_guide.id = products_variants.size_id 
        INNER JOIN colors_guide ON colors_guide.id = products_variants.color_id 
        WHERE product_id = ${product_id} AND products_variants.${attribute} = "${value}" ORDER BY size_id ASC`
      )
  
      if (listFiltred.length === 0 ) {
        return res.json({error:'No se encontraron productos'})
      }
  
  
      res.json(listFiltred)
  
    } catch (err) {
      console.log(err);
      
    }
  
  
}




const editProductVariant = async (req,res)=>{

  try {

    const {price, stock, idVariant} = req.query

    console.log(req.query); 

    if (stock === 'undefined') 
    await doQuery(`UPDATE products_variants SET price = ${price} WHERE id = ${idVariant} ; ` )

    else
    await doQuery(`UPDATE products_variants SET stock = ${stock} WHERE id = ${idVariant} ; ` )
      

    
    const recoveryData = await doQuery('SELECT price, stock FROM products_variants WHERE id = ?', [idVariant])
    
    res.json({
      newPrice:recoveryData[0].price,
      newStock:recoveryData[0].stock, 
      msg:'Producto editado'
    })




  } catch (err) {
    console.log(err);
    
  }


}





const deleteProductVariant = async (req,res)=>{

  try {

    console.log(req.params.id);
    const {id} = req.params


    await doQuery('DELETE FROM products_variants WHERE id = ?', [id])


    res.json('ok')

  } catch (err) {
    console.log(err);
    
  }


}







module.exports = {
  InsertProduct,
  getAdminPanel,
  getProductsPanel,
  deleteProduct,
  getProductsModels,
  getProductCtrl,
  updateProductCtrl,
  insertVariations,
  getGuideValues,
  getProductsVariations,
  getProductModel,
  getSizesProductModel,
  getColorsProductModel,
  filterVariants,
  deleteProductVariant,
  editProductVariant,
  uploadThumbanail,
  uploadDetailImages
};
