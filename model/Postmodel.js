const mongoose=require("mongoose")
const validator=require("validator")





const postSchema=new mongoose.Schema({

    name: {
        type: String,
        required:true
      },
      city:{
        type:String,
        required:true


      },
      room: {
        type: Number,
        required:true 
        },
        price:{
          type: Number,
          required: true
        },
       
      image: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
     
      createdAt: {
        type: Date,
        default: Date.now,
      },
      
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
    
    

})


module.exports = mongoose.model("Post", postSchema);
