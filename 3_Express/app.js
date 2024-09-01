const express=require('express')
const app=express()
app.get('/about',(req,res)=>{
res.send('Hello from sakshi')
})


app.use(express.json())
const courses=[
    {id:1,name:'Javascript'},
    {id:2,name:'java'},
    {id:3,name:'python'},
]



//get
app.get('/courses/:id',(req,res)=>{
    //console.log(req.params)
    let course=courses.find(course=>course.id===parseInt(req.params.id))
    
    if(!course)res.status(404).send('the course you are looking for does not exist')
    res.send(course)
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})
//create
app.post('/courses',(req,res)=>{
    const course={
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course)
    res.send(course)
})

//update
app.put('/courses/:coursename',(req,res)=>{
    let course=courses.find(course=>course.name===req.params.coursename)
    if(!course)res.status(404).send('the course does not exist')
       
    
    course.name=req.body.name
    res.send(course)
})

app.listen(3000,()=>console.log('Port is running on 3000'))