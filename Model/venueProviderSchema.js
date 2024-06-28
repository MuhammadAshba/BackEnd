const mongoose= require('mongoose');
const { Schema } = mongoose;

const venueProviderSchema = new mongoose.Schema({
    
       
property: String,
nameOfPlace: String,
city:String,
address: String,
state:String,
postalCode: Number,
pinLocation: Number,
additionalService: String,
price: Number,
amenities: String,
placeDescription: String,
coverPicture: String, // URL to the cover picture
pictureOfVenue: String // URL to the picture of the venue

});

const VenueProvider = mongoose.model('venueProvider', venueProviderSchema);

module.exports= VenueProvider;