import { Injectable } from '@nestjs/common';
import { CreateFovoriteDto } from './dto/create-fovorite.dto';
import { UpdateFovoriteDto } from './dto/update-fovorite.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FovoritesService {
  constructor(@InjectModel('Fovorite') private readonly fovorites: Model<any>) {}
 
  async create(productId: CreateFovoriteDto, req: any) {
    await this.fovorites.create({ productId, userId: req.user });
    return 'This action adds a new favorite';
  }

  async findAll(req: any) {
    const data = await this.fovorites.find({ userId: req.user });
    return `${data}`;
  }

  async findOne(id: string, req: any) {
    const favorite = await this.fovorites.find({
      userId: req.user,
      productId: id,
    });
    return `${favorite}`;
  }

  async remove(productId: string, req: any) {
   return this.fovorites.findByIdAndDelete(productId)
  }
}
