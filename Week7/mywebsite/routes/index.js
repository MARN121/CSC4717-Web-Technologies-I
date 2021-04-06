var express = require('express');
const product_controller=require('../controllers/product.controller')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId: 'home' });
});

router.get('/about',function(req,res,next){
  res.render('about', { page: 'About', menuId: 'about' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { page: 'Contact', menuId: 'contact' });
});

// CRUD operations routes
// Route that will show all products 
router.get('/list', product_controller.product_list);

// Route that will show insert form 
router.get('/createform',product_controller.product_formcreate);
// Route that will show insert operation
router.post('/create', product_controller.product_create);

// Deletion operation
router.post('/:id/delete', product_controller.product_delete);

// Call the update form
router.post('/updateform/:id', product_controller.product_updateform);
// Call the update operation 
router.post('/:id/update', product_controller.product_update);

module.exports = router;
