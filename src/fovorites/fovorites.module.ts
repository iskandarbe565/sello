import { Module } from '@nestjs/common';
import { FovoritesService } from './fovorites.service';
import { FovoritesController } from './fovorites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { fovoriteModel } from 'src/models/fovorite.model';

@Module({
  imports:[MongooseModule.forFeature([{name:"Fovorite",schema:fovoriteModel}])],
  controllers: [FovoritesController],
  providers: [FovoritesService],
})
export class FovoritesModule {}
