const router=require('express').Router();
const product=require('../controllers/Product_Controller');
router.get('/:id',product.dashboard);
module.exports=router;