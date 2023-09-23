import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { adminModel } from 'src/models/admin.model';

@Module({
  imports:[MongooseModule.forFeature([{name:"Admin",schema:adminModel}])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
