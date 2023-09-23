import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { orderModel } from 'src/models/order.model';

@Module({
  imports:[MongooseModule.forFeature([{name:"Order",schema:orderModel}])],
  controllers: [OrderController],
  providers: [OrdersService],
})
export class OrdersModule {}
