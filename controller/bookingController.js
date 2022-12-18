const express=require("express")
const { isAuthenticatedusers } = require("../middleware/auth")
const { findByIdAndDelete } = require("../model/Bookingmodel")
const booking=require("../model/Bookingmodel")
const user=require("../model/Usermodel")
const router=express.Router()



exports.addbookingroom=(async(req,res)=>{
    try{

        console.log(req.body)

        const {name,room,price,date,city,image}=req.body
        // console.log(req.body)

        const booked= await booking.create({
            name,
            room,
            price,
            date,
            city,
            image,
            user:req.user._id
        })

        console.log(booked)
        
        res.status(200).json(
            {
                success:true,
                booked
            }
            )
            
            
        }catch(err){
            res.status(200).send({
                error:err
            })
            console.log(err)
        }
        })


exports.deletebookingroom=(async(req,res)=>{
    try{

        const id=req.params.id
        console.log(id)

        const booked=await booking.findByIdAndDelete(id)

    res.status(200).send(
        {
            success:true,
            booked
        }
        )
        
    }catch(err){
        res.send({
            err:err
        })
    }
        
    })


    exports.getuserbooking=(async(req,res,next)=>{
        try{
            console.log("bb",req.user._id)
            // const user1=req.user._id.toString()
            // console.log(user1)
            // const Booking=await booking.find()
            //  const Booking=await booking.findById(user1)
            const Booking=await booking.find({user:req.user._id})

            console.log(Booking)

            res.status(200).json({
                success:true,
                Booking
            })






        }catch(err){
            res.send({
                err:err
            })
            console.log(err)
        }

    })

