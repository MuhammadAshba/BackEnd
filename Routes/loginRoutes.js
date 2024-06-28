
const express= require('express')
const router = express.Router()


const {logIn,UserRegister}=require('../Controller/loginController')


// Login
router.route('/signIn').post(logIn)

router.route('/signup').post(UserRegister)



module.exports= router; 