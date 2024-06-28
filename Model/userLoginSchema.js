const mongoose= require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    

        useremail: String, 
        userpassword: String, 

});

const User = mongoose.model('user', userSchema);

module.exports= User;