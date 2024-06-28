const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema({
    category: String,
    name: String,
    city: String,
    state: String,
    zipCode: Number,
    address: String,
    service: Boolean,
    description: String,
    coverPicture: String, // URL to the cover picture
    pictureOfVenue: String // URL to the picture of the venue
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
