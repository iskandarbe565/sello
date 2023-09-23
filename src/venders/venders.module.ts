import { Module } from '@nestjs/common';
import { VendorsService } from './venders.service';
import { VendorController } from './venders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { venderModel } from 'src/models/vender.model';

@Module({

  imports:[MongooseModule.forFeature([{name:"Vender",schema:venderModel}])],
  controllers: [VendorController],
  providers: [VendorsService],
})
export class VendersModule {}
