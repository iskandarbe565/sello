

import { Schema } from "mongoose";


export const basketModel=new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'product',
      },
    },
    {
    timestamps:true
})