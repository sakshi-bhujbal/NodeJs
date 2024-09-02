const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/testDB').then(()=>console.log('Connection successfull')).
catch(err=>console.error('Unsuccessful',err))

const courseSchema=new mongoose.Schema({
    name:String,
    creator:String,
    pubDate:{type:Date,default:Date.now},
    isPublished:Boolean,
})

const Course=mongoose.model('Course',courseSchema)

async function createCourse(){
    const course=new Course({
        name:'Java',
        creator:'Sakshi',
        isPblished:true
    })

    const result=await course.save()
    console.log(result)
}
createCourse()

async function getCourses(){
    const courses=await Course.find({
        creator:'Mrinal'
    }).select({name:1,pubDate:1})
    console.log(courses)
}
getCourses()
