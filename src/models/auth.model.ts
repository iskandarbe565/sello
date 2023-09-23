

import { Schema } from "mongoose";


export const authModel=new Schema({
    name:{
        type:String
    }
},{
    timestamps:true
})