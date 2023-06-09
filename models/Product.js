const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
    },
    price: {
        type: String,
        require: true,
        min: 5,
    },
    category: {
        type: String,
        require: true,
    },
    subcategory: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    },
},{timestamps:true});
module.exports=mongoose.model('product',ProductSchema);
