const router=require('express').Router();
const product=require('../controllers/Product_Controller');
router.get('/:key',product.search);
module.exports=router;