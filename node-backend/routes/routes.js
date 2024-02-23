module.exports = (app) => {
    const productsController = require('../controllers/productsController.js');
    const customerDetailsController = require('../controllers/customerDetailsController.js')
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('access-control-expose-headers', 'access-token');
        next();
    });

    app.post('/api/userDetails/registerNewCustomer', customerDetailsController.registerNewCustomer); // Update a product by id 
    app.post('/api/userDetails/loginCustomer', customerDetailsController.loginCustomer); // Update a product by id 
    app.post('/api/products/addNewProduct', productsController.addNewProduct); // Create and Save a new Product
    app.get('/api/products/getAllProducts', productsController.getAllProducts); // Get all products
    app.get('/api/products/:productId', productsController.findOneProduct) // Get one product based on product id
    app.post('/api/products/updateProducts', productsController.updateProducts); // Update a product by id 

}