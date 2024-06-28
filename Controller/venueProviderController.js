
const VenueProvider = require('../Model/venueProviderSchema')


exports.getIn=async (req, res) => {
    try {
        const venueProvider = await VenueProvider.find();
        res.status(200).json(venueProvider);
    } catch (error) {
        res.status(500).json({ message: 'Error in Fetching Foods', error: error.message });
    }}