import { Schema } from "mongoose";



export const categoryModel=new Schema({
    name:{
        type:String
    }
},
{
    timestamps:true
})