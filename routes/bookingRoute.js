const express=require("express")
const { addbookingroom, deletebookingroom, getuserbooking } = require("../controller/bookingController")
const { isAuthenticatedusers } = require("../middleware/auth")
const router=express.Router()

router.route('/booking').post(isAuthenticatedusers,addbookingroom)
router.route('/getuserbooking').get(isAuthenticatedusers,getuserbooking)

router.route('/deletebooking/:id').delete(isAuthenticatedusers,deletebookingroom)

module.exports=router