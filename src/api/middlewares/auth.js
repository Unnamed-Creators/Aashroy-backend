const jwt=require("jsonwebtoken")

const { User }=require("../models")

const auth=async (req,res,next)=>{
   
  try {
    const token = req.cookies.auth_abedon

    if(!token) 
      return res.status(400).json({msg: "Invalid Authentication."})

    jwt.verify(token, process.env.USER_TOKEN_SECRET, async (err, user) => {
      
        if(err) 
          return res.status(400).json({
              error: "Invalid Authentication."
          })

        req.user = await User.findById(user._id)

        next()
    })
  } catch (err) {
  
    return res.status(500).json({
        error: "Internal server error.",
    })

  }
}
module.exports=auth