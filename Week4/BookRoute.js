var express=require('express')
var router=express.Router()

//http://localhost:3000/books/
router.get('/',(req,res)=>{
    res.send("Get Book")
})

router.post('/',(req,res)=>{
    res.send("Add Book")
})

router.put('/',(req,res)=>{
    res.send("Update Book")
})

router.delete('/',(req,res)=>{
    res.send("Delete Book")
})

module.exports=router