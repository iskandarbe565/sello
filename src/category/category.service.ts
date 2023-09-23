import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {

  constructor(@InjectModel('Category') private readonly categories:Model<any>)
  {}
  async create({ name }: CreateCategoryDto) {
    await this.categories.create({ name });
    return 'This action adds a new catagory';
  }

  async findAll() {
    const catagorys = await this.categories.find();
    return `${catagorys}`;
  }

  async findOne(id: string) {
    const catagory = await this.categories.findOne({ id: id });
    return `${catagory}`;
  }

  async update(id: string, { name }: UpdateCategoryDto) {
    await this.categories.findByIdAndUpdate(id, { $set: { name } });
    return `This action updates a #${id} catagory`;
  }

  async remove(id: string) {
    await this.categories.findByIdAndDelete(id);
    return `This action removes a #${id} catagory`;
  }
}