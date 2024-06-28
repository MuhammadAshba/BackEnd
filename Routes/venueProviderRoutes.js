

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const venueProvider = require('../Model/venueProviderSchema');


const {getIn}=require('../Controller/venueProviderController')


// get Route
router.route('/get/makeups').get(getIn)



// Configure storage for multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Corrected the usage of upload.single()
router.post('/postdata', upload.fields([{ name: 'coverPicture', maxCount: 1 }, { name: 'pictureOfVenue', maxCount: 1 }]), async (req, res) => {
   
    console.log('Uploaded files:', req.files);
    console.log('Form data:', req.body);
    // Handle the uploaded files

    //  Base URL for accessing uploaded files
    //     const baseUrl = `${req.protocol}://${req.get('host')}`;

    //     // Handle the uploaded files
    //     const coverPicture = req.files.coverPicture ? path.join(baseUrl, 'uploads', req.files.coverPicture[0].filename) : null;
    //     const pictureOfVenue = req.files.pictureOfVenue ? path.join(baseUrl, 'uploads', req.files.pictureOfVenue[0].filename) : null;

    // const distilled_obj = {
    //     property: req.body.property,
    //     nameOfPlace: req.body.nameOfPlace,
    //     state: req.body.state,
    //     postalCode: req.body.postalCode,
    //     city:req.body.city,
    //     address: req.body.address,
    //     pinLocation: req.body.pinLocation,
    //     additionalService: req.body.additionalService,
    //     price: req.body.price,
    //     amenities: req.body.amenities,
    //     placeDescription: req.body.placeDescription,
    //     coverPicture: coverPicture,
    //     pictureOfVenue: pictureOfVenue
    // };

    // try {
    //     await venueProvider.create(distilled_obj);
    //     res.status(200).json({ message: 'Successfully Created' });
    // } catch (error) {
    //     res.status(500).json({ message: 'Error in Creating', error: error.message });
    // }
});

module.exports = router;
