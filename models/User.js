const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
    },
    email: {
        type: String,
        require: true,
        min: 5,
    },
    business: {
        type: String,
        require: true,
        min: 5,
    },
    password: {
        type: String,
        require: true,
        min: 5,
    },
},{timestamps:true});
module.exports=mongoose.model('user',UserSchema);
