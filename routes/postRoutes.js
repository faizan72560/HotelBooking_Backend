const express=require("express")
const{post,updatepost,deletepost,getpost, getallpost, getsinglepost}=require('../controller/postController')
const { isAuthenticatedusers, authorizeRoles } = require("../middleware/auth")
const router=express.Router()

router.route('/addpost').post(isAuthenticatedusers,authorizeRoles('admin'),post)
router.route('/updatepost:id').post(isAuthenticatedusers,authorizeRoles('admin'),updatepost,)
router.route('/deletepost:id').delete(isAuthenticatedusers,authorizeRoles('admin'),deletepost)
router.route('/getpost').get(getpost)
router.route('/allpost').get(isAuthenticatedusers,authorizeRoles('admin'),getallpost)
router.route('/singlepost:id').post(getsinglepost)





module.exports=router