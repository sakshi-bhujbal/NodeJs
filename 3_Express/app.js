const express=require('express')
const app=express()
app.get('/about',(req,res)=>{
res.send('Hello from sakshi')
})
app.listen(3000,()=>console.log('Port is running on 3000'))