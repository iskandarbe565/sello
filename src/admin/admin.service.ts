import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
// @Injectable()
// export class AdminService {

//   constructor(@InjectModel('Admin') private readonly admins: Model<any>) {}
  
@Injectable()
export class AdminService {
  constructor(private readonly jwtService: JwtService) {}
  async login({ username, password }: CreateAdminDto) {
    if (username === 'Islomjonov') {
      if (password === 'Iskandar') {
        const token = await this.jwtService.sign({ id: 'Iskandar' });
        return `Tizimga muvoffaqiyatli kirdingiz: ${token}`;
      } else {
        return 'Tizimga kirishda xatolik';
      }
    } else {
      return 'Username xato';
    }
    return '';
  }
}
