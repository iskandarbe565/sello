

import { Schema } from "mongoose";


export const fovoriteModel=new Schema({
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