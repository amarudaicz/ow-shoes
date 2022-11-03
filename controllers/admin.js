const handleHttpError = require('../utils/handleHttpError');
const { verifyToken } = require('../utils/handleJwt');
const {
  insertProductAdmin,
  deleteProductAdmin,
  getListProducts,
  getProduct,
  updateProduct,
  insertVariaton,
} = require('../mysql/admin');
const { doQuery } = require('../services/mysqlS/operationsMysql');


const getAdminPanel = (req, res) => {
  try {

    const token = req.cookies['token.ow'];
    const user = 'amaru'

    const page = 'home';

    res.render('admin', { user, page });
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_GET_ADMIN_PANEL');
  }
};



const getProductsPanel = (req, res) => {
  try {
    const { user } = req.cookies;
    const page = 'products-panel';

    res.render('admin', { user, page });
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_GET_PRODUCT_PANEL');
  }
};



const InsertProduct = (req, res) => {
  try {
    const { body } = req;

    insertProductAdmin(body, (result) => {
      result.message = 'Producto agregado correctamente!';

      res.json(result);
    });
  } catch (err) {}
};


const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;

    deleteProductAdmin(id, (result) => {
      // res.status(300).send(result.message)??????????

      if (result.affectedRows === 0) {
        res.status(202).send({ error: 'Producto no encontrado' });
        return;
      }

      result.message = 'Producto eliminado';
      res.status(200).json(result);
    });
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_DELETE_PRODUCT');
  }
};



const listProducts = (req, res) => {
  try {
    getListProducts((result) => {
      res.json(result);
    });
  } catch (err) {
    handleHttpError(res, 'ERROR_EN_GET_LIST_PRODUCTS');
  }
};



const getProductCtrl = (req, res) => {
  try {
    const id = req.query.id;
    

    getProduct(id, (result) => {
      const product = result[0];

      res.render('edit-product', {
        product,
      });
    });


  } catch (err) {
    handleHttpError(res, 'ERROR_EN_GET_PRODUCT');
  }
};



const updateProductCtrl = (req, res) => {
  try {
    const { body: data } = req;

    const id = data.id;

    updateProduct(id, data, (result) => {
      res.send({ data: 'ok' });
    });
  } catch (err) {
    handleHttpError(res, 'ERROR_EN_EDIT_PRODUCT');
  }
};



const insertVariations = async (req, res) => {
  try {
     const { id, values, atribute } = req.body;
    console.log(values);
    console.log(atribute);

    


    //  let variations = values.split(',').filter((e) => e !== '');

    //  const productModel = await doQuery('SELECT * FROM products WHERE id = ?', [
    //    id,
    //  ]);

    //  const variants = await doQuery(
    //    'SELECT * FROM variants WHERE atribute = ? ',
    //    [atribute]
    //  );

    //  let variantsChose = [];
    //  variations.forEach((e) =>
    //    variantsChose.push(variants.filter((v) => v.value === e)[0])
    //  );

    //  variantsChose.forEach(async (e) => {
    //    const productVariant = await doQuery(
    //      'INSERT INTO products_variants (variant_id, product_id, sku, price) VALUES(?,?,?,?)',
    //      [
    //        e.id,
    //        productModel[0].id,
    //        `${productModel[0].title.trim()}-${e.atribute[0]}-${e.value}`,
    //        productModel[0].price,
    //      ]
    //    );
    //  });

    res.send(req.body);

  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_INSERT_VARIATION');
  }
};



const setingVariations = async (req, res) => {
  try {
    const { values, atribute } = req.body;

    let variations = values.split(',').filter((e) => e !== '');

    variations.forEach(async (element) => {
      await doQuery('INSERT INTO variants (atribute, value) VALUES(?, ?)', [
        atribute,
        element,
      ]);
    });

    res.send('ok');
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_INSERT_VARIATION');
  }
};



const getVariations = async (req, res) => {
  try {
    const variations = await doQuery('SELECT * FROM variants');

    res.send(variations);
  } catch (err) {
    console.log(err);
    handleHttpError(res, 'ERROR_EN_GET_VARIATIONS');
  }
};



const getProductsVariations = async (req, res) => {

  try {

    const {id} = req.query

    const productsVariants = await doQuery('SELECT products_variants.id, sku, price, value, atribute FROM products_variants INNER JOIN variants ON products_variants.variant_id = variants.id WHERE product_id = ?', [id])

    console.log(productsVariants);


    res.send(productsVariants)

    
  } catch (err) {
    handleHttpError(res, 'ERROR_EN_GET_PRODUCTS_VARIATIONS')
  }
}






const getProductModel = async (req, res) => {

  try {
    const {id} = req.query

    const productModel = await doQuery('SELECT * FROM products WHERE id = ? ', [id])

    res.send(productModel)
    
  } catch (err) {
    handleHttpError(res, 'ERROR_EN_GET_PRODUCT_MODEL')
  }
}





module.exports = {
  InsertProduct,
  getAdminPanel,
  getProductsPanel,
  deleteProduct,
  listProducts,
  getProductCtrl,
  updateProductCtrl,
  insertVariations,
  setingVariations,
  getVariations,
  getProductsVariations,
  getProductModel
};
