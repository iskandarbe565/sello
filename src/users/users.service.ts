import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as nodemailer from 'nodemailer';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cache } from 'cache-manager';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('User') private readonly users: Model<any>,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}
  async create({}: CreateUserDto) {
    return 'This action adds a new user';
  }
  async verification({ email }: CreateUserDto) {
    const user = await this.users.findOne({ email });
    if (!user) {
      const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
          user: 'nasirullayevo7@gmail.com',
          pass: 'smenmggcgonbqmwl',
        },
        secure: true,
      });
    const code =Math.round(Math.random()*100000)
      await this.cacheManager.set(`key`, `${code}`, 0);
      const mailData = {
        from: 'nasirullayevo7@gmail.com',
        to: `${email}`, 
        subject: 'Sending Email using Node.js',
        text: `Code:${code}`,
      };
      await transporter.sendMail(mailData);
      return ` Tasqiqlash kodi emailingizga jo'natildi !`;
    } else {
      return 'Bu emaildan oldin royxatdan otilgan';
    }
  }
  async Aspect({ email, password, vericationCode }: CreateUserDto) {
    const key = await this.cacheManager.get('key');
    if (key === vericationCode) {
      const hashpassword = await bcrypt.hash(password, 10);
      const user = await this.users.create({ email, password: hashpassword });
      const token = await this.jwtService.sign({ id: user.id });
      return `Welcome to account: ${token} `;
    } else {
      return `Kod kiritish vaqti tugadi qaytadan urinib koring`;
    }
  }

  async findAll() {
    const data = await this.users.find();
    return `${data}`;
  }

  async findOne(id: string) {
    const data = await this.users.findById(id);
    return `${data}`;
  }

  async update(
    id: string,
    { username,
      name,
      lastname,
      birthday,
      gender,
      profilePicture,
    }: UpdateUserDto,
  ) {
    const user = await this.users.findById(id);
    if (user) {
      await this.users.findByIdAndUpdate(id, {
        $set: {
          username,
          name,
          lastname,
          birthday,
          gender,
          profilePicture,
        },
      });
      return `This action updates a #${id} user`;
    } else {
      return `Qaytadan urinib ko'ring`;
    }
  }

  async remove(id: string) {
    await this.users.findByIdAndDelete(id);
    return `This action removes a #${id} user`;
  }
}
