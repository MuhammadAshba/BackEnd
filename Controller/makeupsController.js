

const Makeups = require('../Model/makeupSchema')


exports.getIn=async (req, res) => {
    try {
        const makeups = await Makeups.find();
        res.status(200).json(makeups);
    } catch (error) {
        res.status(500).json({ message: 'Error in Fetching Foods', error: error.message });
    }}