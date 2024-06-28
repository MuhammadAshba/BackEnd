const express= require('express')
const app= express()
const cors = require('cors');
const bodyParser= require('body-parser')
const { json } = require('body-parser')
const Port=5000;


 // Use CORS middleware
 const corsOptions = {
    origin: 'http://localhost:3000',//(https://your-client-app.com)
    optionsSuccessStatus: 200,
  };
 
  app.use(cors(corsOptions));

// DataBase Connect
const connectDB= require('./Config/db')
connectDB();


//Mounting the Routes
const login= require('./Routes/loginRoutes')
const entertainment= require('./Routes/entertainmentRoutes')
const Food= require('./Routes/foodRoutes')
const makeups= require('./Routes/makeupsRoutes')
const organizer=require('./Routes/organizerRoutes')
const venueProvider= require('./Routes/venueProviderRoutes')



////  Routes Track
app.use('/login',login)
app.use('/entertainment',entertainment)
app.use('/food',Food)
app.use('/makeup/post',makeups)
app.use('/organizer',organizer)
app.use('/venueProvider',venueProvider)


//The Server is Listening on Port 5000
app.listen(Port,  ()=>{

            console.log(`Server is running on ${Port}`)
})