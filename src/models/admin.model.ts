import { Schema } from "mongoose";


export const adminModel=new Schema({
    name:{
        type:String
    }
},{
    timestamps:true
})