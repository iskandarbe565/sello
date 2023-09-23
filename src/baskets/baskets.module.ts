import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketController } from './baskets.controller';
import { basketModel } from 'src/models/basket.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:"Basket",schema:basketModel}])],
  controllers: [BasketController],
  providers: [BasketsService],
})
export class BasketsModule {}
