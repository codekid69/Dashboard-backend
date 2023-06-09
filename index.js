const express=require('express');
// const port=process.env.PORT || 5000;
const port= 5000;
const app=express();
const cors=require('cors');
const db=require('./config/mongoose');
app.use(express.json());
app.use(cors());
app.use('/',require('./routes/index'));
app.listen(port,(error)=>{
    if(error){
        console.log(`Error in running the server ${server}`);
    }
    console.log(`Server running at port ${port}`);
});