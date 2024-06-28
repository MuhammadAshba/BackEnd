



const Entertainment = require('../Model/entertainmentSchema')


exports.getIn=async (req, res) => {
    try {
        const entertainment = await Entertainment.find();
        res.status(200).json(entertainment);
    } catch (error) {
        res.status(500).json({ message: 'Error in Fetching Foods', error: error.message });
    }}