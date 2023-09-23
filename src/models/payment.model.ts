

import { Schema } from "mongoose";
import { Payment } from './../payments/entities/payment.entity';


export const paymentModel=new Schema({
    name:{
        type:String
    }
},{
    timestamps:true
})