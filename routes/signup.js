const router=require('express').Router();
const User=require('../controllers/User_Controller');
router.post('/',User.Signup);
module.exports=router;