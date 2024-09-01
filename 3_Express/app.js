const express=require('express')
const app=express()
app.get('/about',(req,res)=>{
res.send('Hello from sakshi')
})

app.get('/courses/:id',(req,res)=>{
    console.log(req.params)
    res.send(req.params.id)
})
app.listen(3000,()=>console.log('Port is running on 3000'))