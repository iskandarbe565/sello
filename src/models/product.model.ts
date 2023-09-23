


import { Schema } from "mongoose";


export const productModel=new Schema({
    name: {
        type: String,
      },
      brend: {
        type: String,
      },
      price: {
        type: Number,
      },
      vendorId: {
        type: Schema.Types.ObjectId,
        ref: 'vendor'
      },
      catagoryId: {
        type: Schema.Types.ObjectId,
        ref: 'catagory'
      },
    },
{
    timestamps:true
})