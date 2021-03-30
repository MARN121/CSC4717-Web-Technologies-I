var express=require('express')
var router=express.Router()

//http://localhost:3000/Students/
router.get('/',(req,res)=>{
    res.send('Home Page')
})

//http://localhost:3000/Students/about
router.get('/about',(req,res)=>{
    res.send('About Page')
})

module.exports=router