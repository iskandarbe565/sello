

import { Schema } from "mongoose";


export const orderModel=new Schema({
    typeOfDelivery: {
        type: String,
      },
      deliveryDate: {
        type: String
      },
      deliveryTime: {
        type: String
      },
      region:{
        type: String
      },
      district: {
        type: String
      },
      home: {
        type: String
      },
      orders: {
        type: Array
      }
    },
{
    timestamps:true
})