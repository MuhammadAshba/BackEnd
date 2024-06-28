
const User = require("../Model/userLoginSchema")


exports.logIn=async(req,res,next)=>{

        console.log(req.body)
    const email= req.body.email;
    const password= req.body.password;
    const user = await User.findOne({email:email}) 

     res.status(200).json({
      success: true,
      message: 'You are logged in Successfully',
      Status: 200
      
     })
  
    
  
  
      
  }





  exports.UserRegister=(req,res)=>{

    console.log(email)

    const newCustomer={
  
        email: req.body.email,        
        password:req.body.password,
      
    }

                const user= newCustomer;
     try {
         User.create(user)

            res.json({
                code : 200,
                Message:"Register Successfull",
                Success: true,
                 

                
            })
       
    } catch (error) {

        console.log(error)
         res.json({
            Message: "There has been Error"
         })
    }

}


