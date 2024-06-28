

const Food = require('../Model/foodSchema')


exports.getIn=async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ message: 'Error in Fetching Foods', error: error.message });
    }}