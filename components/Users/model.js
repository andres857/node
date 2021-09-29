const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    // user: {
    //     type:String,
    //     required:true
    // },
    // date:Date,
    name: String,
})

const model = mongoose.model('User',mySchema);
module.exports = model;