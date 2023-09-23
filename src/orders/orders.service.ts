import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('Order') private readonly orders: Model<any>
  ) {}
  async create({ typeOfDelivery,deliveryDate,deliveryTime,region,district,home,orders,
  }: CreateOrderDto) {
    await this.orders.create({typeOfDelivery,deliveryDate,deliveryTime,region,district,home,orders,
    });
    return 'This action adds a new order';
  }

  async findAll(req: any) {
    const datas = await this.orders.find({ userId: req.user });
    return `${datas}`;
  }

  async findOne(id: string, req: any) {
    const data = await this.orders.find({ userId: req.user, productId: id });
    return `${data}`;
  }

  update(id: string, {}: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: string, req: any) {
    await this.orders.findOneAndDelete({ userId: req.user, productId: id });
    return `This action removes a #${id} order`;
  }
}
