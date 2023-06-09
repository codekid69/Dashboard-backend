const User=require('../models/User');
const bcrypt=require('bcryptjs');


// SIGNUP
module.exports.Signup=async function(req,res){
    if(req.body.password!==req.body.confirmpassword){
        return res.send("Password and Confirm Password not matching");
    }
    
    const user=await User.findOne({email:req.body.email});

    if(user){
        return res.send("User already Exist");
    }

    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hashSync(req.body.password,salt);

    let registration=await User.create({
        name:req.body.name,
        email:req.body.email,
        business:req.body.business,
        password:hashedPassword
    });
    try{
        registration.save();
        registration={"id":registration._id,"name":registration.name,"email":registration.email,"business":registration.business}
        return res.status(200).json(registration);
    }catch(error){
        console.log("error",error);
        return res.status(401);
    }
}

// LOGIN

module.exports.Login=async function(req,res){
    let user=await User.findOne({email:req.body.email});
    if(!user){
        return res.status(404).send("User Not Exist");
    }
    // console.log("userrrr",user.email);
    // console.log("input",req.body.email);
    const authenticUser=await bcrypt.compare(req.body.password,user.password);
    if(!authenticUser){
        return res.status(401).send("Invalid Credentials");
    }
    user={"id":user._id,"name":user.name,"email":user.email,"business":user.business}
    return res.status(200).send(user);
}


module.exports.getUser=async function(req,res){
    let result=await User.findById(req.params.id);
    if(result){
        result={"name":result.name,"email":result.email,"business":result.business};
        return res.status(200).send(result);
    }else{
        return res.status(401).send("product not found");
    }
}
module.exports.updateUser=async function(req,res){
    // console.log("UPDATE USER",req.params.id);
    let result=await User.updateOne(
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