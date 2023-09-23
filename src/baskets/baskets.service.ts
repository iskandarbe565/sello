import { Injectable } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BasketsService {
  constructor(@InjectModel('Basket') private readonly baskets: Model<any>) {}
 
  async create(productId: string, req: any) {
    await this.baskets.create({ productId, userId: req.user });
   
    return 'Added basket';
  }

  async findAll(req: any) {
    const products = await this.baskets.find({ userId: req.user });
    return `${products}`;
  }

  async findOne(productId: string, req: any) {
    const product = await this.baskets.find({
      userId: req.user,
    });
    return `${product}`;
  }

  async remove(id: string, req: any) {
    await this.baskets.findOneAndDelete({ userId: req.user, productId: id });
    return `This action removes a #${id} basket`;
  }
}
