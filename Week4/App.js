var express=require('express')
var R1=require('./RouteMod')
var RBook=require('./BookRoute')
var app=express()

// http://localhost:3000/books
app.use('/books', RBook) 

// http://localhost:3000/Students
app.use('/Students', R1)

var server=app.listen(3000, ()=>{
    console.log("Server is Running at port 3000, NICE!")
})