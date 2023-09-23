import { Injectable } from '@nestjs/common';
import { CreateVenderDto } from './dto/create-vender.dto';
import { UpdateVenderDto } from './dto/update-vender.dto'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class VendorsService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('Vender') private readonly vendors: Model<any>,
  ) {}

  async register({username,name,surname,password,email,
  }: CreateVenderDto) {
    const findVendor = await this.vendors.findOne({ username });
    if (findVendor) {
      return `${username} bu foydalanuvchi allaqachon mavjud`;
    } else {
      const hashpassword = await bcrypt.hash(password, 10);
      const vendor = await this.vendors.create({username,name,surname,password: hashpassword,email,});
      return `Succes register ${vendor.id}`;
    }
  }
  async login({ username, password }: CreateVenderDto) {
    const findVendor = await this.vendors.findOne({ username });
    if (findVendor) {
      const check = await bcrypt.compare(password, findVendor.password);
      if (check) {
        const token = await this.jwtService.sign({ id: findVendor.id });
        return `Siz tizimga kirdingiz: ${token}`;
      } else {
        return `Parolda xatolik bor`;
      }
    } else {
      return `Royxatdan otmagansiz`;
    }
  }

  async findAll() {
    const data = await this.vendors.find();
    return `${data}`;
  }

  async findOne(id: string) {
    const data = await this.vendors.findById(id);
    return `${data}`;
  }

  async update(id: string, {}: UpdateVenderDto) {
    return `This action updates a #${id} vendor`;
  }

  async remove(id: string) {
    await this.vendors.findByIdAndDelete(id);
    return `This action removes a #${id} vendor`;
  }
}
