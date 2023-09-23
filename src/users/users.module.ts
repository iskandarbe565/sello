import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userModel } from 'src/models/users.model';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports:[ CacheModule.register({
    ttl: 10000, // seconds
    max: 10, // maximum number of items in cache
    isGlobal: true,
  }),
  MongooseModule.forFeature([{name:"User",schema:userModel}])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
