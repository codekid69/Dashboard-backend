const router=require('express').Router();
const product=require('../controllers/Product_Controller');
router.get('/products',product.getProducts);
router.get('/product/:id',product.getProduct);
router.put('/product/:id',product.updateProduct);
router.delete('/product/:id',product.deleteProduct);
router.use('/profile',require('./profile'));
router.use('/signup',require('./signup'))
router.use('/login',require('./login'))
router.use('/add-product',require('./product'))
router.use('/search',require('./search'));
module.exports=router;