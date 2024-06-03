const mongoose =  require('mongoose');

const passUpdate = new mongoose.Schema({
    email:String,
    password:String
});

module.exports = mongoose.model("users", passUpdate)