const router=require('express').Router();
const user=require('../controllers/User_Controller');
router.get('/:id',user.getUser);
router.put('/:id',user.updateUser);
module.exports=router;