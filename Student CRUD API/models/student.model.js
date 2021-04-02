const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String, required: true, max: 100},
    gender: {type: String, required: true, max: 10},
    regno: {type: String, required: true}    
});

// Export the model 
module.exports = mongoose.model('Student', StudentSchema);