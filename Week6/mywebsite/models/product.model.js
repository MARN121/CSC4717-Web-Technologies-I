const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 1000},
    price: {type: String, required: true}    
});

// Export the model 
module.exports = mongoose.model('Product', ProductSchema);