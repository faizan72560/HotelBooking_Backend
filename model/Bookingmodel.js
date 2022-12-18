const mongoose=require("mongoose")

const bookingschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
        room:{
            type: Number,
            default:1
        },
        price:{
            type: Number,
            required: true
        },
        date:{
            type: String,
            required:true,
            default: Date.now,

            
        },
        city:{
            type: String,
            required:true
        },

    
      image: {
            type: String,
            required: true
      },
      
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
     
      createdAt: {
        type: Date,
        default: Date.now,
      },
      


})

module.exports=mongoose.model("booking",bookingschema)