const express= require("express")
const {registeruser,loginuser,logout, getuser}=require("../controller/userController")
const{isAuthenticatedusers,authorizeRoles}=require("../middleware/auth")

const router=express.Router()

router.route('/register').post(registeruser)
router.route('/login').post(loginuser)
router.route('/me').get(isAuthenticatedusers,getuser)
router.route('/logout').get(logout)

module.exports=router