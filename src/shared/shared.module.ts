/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { userModel } from 'src/models/users.model';
import { venderModel } from 'src/models/vender.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: userModel },
      { name: 'Vendor', schema:venderModel },
    ]),
  ],
})
export class SharedModule {}
