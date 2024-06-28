const mongoose = require('mongoose');


const connectDB= ()=> {


try {
    mongoose.connect('mongodb://localhost:27017/eve').then((con)=>{

                console.log(`Eve Database is Connected`)
    })
     
} catch (error) {
                console.log(`Error in Database`)
}

}

module.exports= connectDB;