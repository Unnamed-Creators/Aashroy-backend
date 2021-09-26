const { User } = require('../../models')

const {
    serverError
} = require('../../utils')

const { cookieConfig } = require('../../middlewares')

const userController = {
     
    createUser : async ( req, res, next )=>{
        
        try {

            const existUser = await User.findOne({email : req.body.email})
            
            if(existUser){
                return res.status(404).json({
                    error : 'User already exists with this email!!'
                })
            }
             
            const user = await User(req.body)

            await user.save()

            const token = await user.generateAuthToken()

            res.cookie('auth_abedon',token , cookieConfig )
  
            res.status(200).json({
                 msg : 'Registration Successful!!',
                 user
            })
        } catch (error) {
            
            res.status(500).json(serverError)
        }
    },

    loginUser : async ( req, res, next )=>{

        try {
            
            const { email , password } = req.body

            const user = await User.findByCredentials( email , password )

            if(!user){
                return res.status(400).json({
                    error:'Invalid Credentials',
                })
            }

            const token = await user.generateAuthToken()
           
            res.cookie('auth_abedon',token , cookieConfig )

            res.status(200).json({
                msg:'Login Successful',
                user
            })
        } catch (error) {
            res.status(500).json(serverError)
        }
    },

    getUser : async ( req, res, next )=>{

        try {
            
            const user = await User.findById(
                req.params._id
            ) 

            if(!user){
                return res.status(404).json({
                    error: 'User not found'
                })
            }
    
            res.status(200).json({
                user
            })
        } catch (error) {
            
            res.status(500).json(serverError)
        }
    },

    updateUser : async ()=>{
        try {
            
            const user = await User.findByIdAndUpdate(
                req.params._id, req.body
            ) 

            if(!user){
                return res.status(404).json({
                    error: 'User not found'
                })
            }

            await user.save()
    
            res.status(200).json({
                user,
                msg : 'User Updated!'
            })
        } catch (error) {
            
            res.status(500).json(serverError)
        }
    },

    deleteUser : async ()=>{
        try {
            
            const user = await User.findByIdAndDelete(
                req.params._id
            ) 

            if(!user){
                return res.status(404).json({
                    error: 'User not found'
                })
            }
    
            res.status(200).json({
                msg : 'User Deleted!'
            })
        } catch (error) {
            
            res.status(500).json(serverError)
        }
    },
}

module.exports = userController