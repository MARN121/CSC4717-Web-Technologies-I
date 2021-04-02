const express=require('express');
const router=express.Router();

// Including the Controller
const student_controller=require('../controllers/student.controller');

// Routes here
router.get('/',(req,res)=>{
    res.send('Students CRUD API');
});
router.get('/test', student_controller.test);
router.post('/create', student_controller.student_create);
router.get('/:id', student_controller.student_details);
router.put('/:id/update', student_controller.student_update);
router.delete('/:id/delete', student_controller.student_delete);

// Exporting Router
module.exports=router;