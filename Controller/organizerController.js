




const Organizer = require('../Model/organizerSchema')


exports.getIn=async (req, res) => {
    try {
        const foods = await Organizer.find();
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ message: 'Error in Fetching Foods', error: error.message });
    }}