const mongoose= require('mongoose');
const { Schema } = mongoose;

const organizerSchema = new mongoose.Schema({
    
       
    category:String,
    name: String,
    city: String,
    State: String,
    zipCode:Number,
    address: String,
    service: Boolean,
    description: String,
    coverPicture: String, // URL to the cover picture
    pictureOfVenue: String // URL to the picture of the venue

});

const Organizer = mongoose.model('organizer', organizerSchema);

module.exports= Organizer;