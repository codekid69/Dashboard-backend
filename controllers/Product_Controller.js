const Product=require('../models/Product');
module.exports.getProducts=async function(req,res){
   let products=await Product.find();
   if(products.length>0){
      return res.status(200).send(products);
   }
   else{
    return res.status(401).send({result:"No result Found"})
   }
}

module.exports.addProduct=async function(req,res){
    let product=new Product(req.body);
    try{
        let result=await product.save();
        return res.status(200).json(result);
    }catch(error){
        return res.status(401).send("error in saving the data");

    }
}


module.exports.getProduct=async function(req,res){
    // console.log("update",req.params.id);
    let result=await Product.findById(req.params.id);
    if(result){
        return res.status(200).send(result);
    }else{
        return res.status(401).send("product not found");
    }
}

module.exports.updateProduct=async function(req,res){
    let result=await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    if(result){
        return res.status(200).send(result);
    }
    else{
        return res.status(401).send("Unable to Update");

    }
}

module.exports.search=async function(req,res){
    let result=await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {subcategory:{$regex:req.params.key}}
        ]
    })
    return res.status(200).send(result);
}

module.exports.deleteProduct=async function(req,res){
    // console.log(req.params.id);
   const result=await Product.deleteOne({_id:req.params.key});
   return res.send(result)
}

