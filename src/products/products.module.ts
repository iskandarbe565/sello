import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { productModel } from 'src/models/product.model';
import { venderModel } from 'src/models/vender.model';

@Module({
  imports:[MongooseModule.forFeature([{name:"Product",schema:productModel}, {name:"Vendor",schema:venderModel}])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
