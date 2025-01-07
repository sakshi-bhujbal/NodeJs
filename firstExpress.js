const express=require("express")
const app=express();


app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.listen(8080,()=>{
    console.log("The server is running on port http://127.0.0.1:8080");
    })