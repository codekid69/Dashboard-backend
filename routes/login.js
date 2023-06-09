const router=require('express').Router();
const User=require('../controllers/User_Controller');
router.post('/',User.Login);
module.exports=router;