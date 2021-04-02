const Student=require('../models/student.model');

// http://localhost:3000/students/test
exports.test=(req,res)=>{
    res.send("Grettings from Test Controller");
}

exports.student_create=(req,res)=>{
    let student=new Student({
        name:req.body.name,
        gender:req.body.gender,
        regno:req.body.regno
    });
    student.save((err)=>{
        if(err){
            return next(err)
        }
        res.send("Student Added; Sucessful");
    });
}

exports.student_update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,studnet)=>{
        if(err) return next(err);
        res.send('Student Information Updated; Succesful');
    });   
}

exports.student_delete=(req,res)=>{
    Student.findByIdAndDelete(req.params.id, (err)=>{
        if(err) return next(err);
        res.send('Student Delete; Successful');
    }); 
}

exports.student_details=(req,res)=>{
    Student.findById(req.params.id, (err,student)=>{
        if(err) return next(err);
        res.send(student);
    });
}