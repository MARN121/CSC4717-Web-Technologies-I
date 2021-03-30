const express=require('express')

var app=express()

//http://localhost:3000/
app.get('/',(req,res)=>{
    res.send("Hello, how are you?")
})

//http://localhost:3000/Books
app.get('/Books',(req,res)=>{
    res.send("<h1>Books Section</h1>")
})

//http://localhost:3000/Students
app.get('/Students',(req,res)=>{
    res.send("<h1><i>Students</i> Section</h1>")
})

app.post('/',(req,res)=>{
    res.send("Message to the server")
})

//http://localhost:3000/Students/1812121/books/0345
app.get('/Students/:stuid/books/:bookid',(req,res)=>{
    res.send(req.params)
})

app.get('/example/b', function(req,res,next) {
    res.write("1st callback function")
    next()
    }, function(req, res) {
        res.write("\n2nd callback function")
})

var server=app.listen(3000,()=>{
    console.log("Server is up at port 3000! :D")
})