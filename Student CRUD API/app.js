const express=require('express');
const bodyParser=require('body-parser');
const student=require('./routes/student.route');
const mongoose=require('mongoose');

const app=express();

//----- MONGOOSE CONNECTION -----
mongoose.connect("mongodb://localhost/studentDb", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to the Student Database!');
})
.catch(err =>{
    console.log('Cannot connect to the Student Database!', err);
    process.exit();
});
//----- MONGOOSE CONNECTION -----

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// http://localhost:3000/students
app.use('/students', student);

app.listen(3000,()=>{
    console.log('Server is up and running on port 3000.')
});