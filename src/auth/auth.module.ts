import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { authModel } from 'src/models/auth.model';
import { JwtModule } from '@nestjs/jwt';

const secret_key="maxfiy sozlar"
@Module({
  imports:[MongooseModule.forFeature([{name:"Auth",schema:authModel}]),
  JwtModule.register({
    global: true,
    secret: secret_key,
    signOptions: { expiresIn: '60h' },
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
