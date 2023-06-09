const router=require('express').Router();
const product=require('../controllers/Product_Controller');
router.post('/',product.addProduct);
module.exports=router;