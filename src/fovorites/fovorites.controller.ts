import { Controller, Get, Post, Body, Patch, Param, Delete,Req } from '@nestjs/common';
import { FovoritesService } from './fovorites.service';
import { CreateFovoriteDto } from './dto/create-fovorite.dto';
import { UpdateFovoriteDto } from './dto/update-fovorite.dto';
import { ApiTags} from "@nestjs/swagger"

@Controller('fovorites')
@ApiTags('fovorites')
export class FovoritesController {
  constructor(private readonly fovoritesService: FovoritesService) {}

  @Post(':productId')
  create(@Param('productId') productId, @Req() req: any) {
   return  this.fovoritesService.create(productId,req)
  }

  findAll(@Req() req: any) {
    return this.fovoritesService.findAll(req);
  }

  @Get(':productId')
  
  findOne(@Param('productId') productId: string, @Req() req: any) {
    return this.fovoritesService.findOne(productId, req);
  }

  @Delete(':productId')
  remove(@Param('productId') productId: string, @Req() req: any) {
    return this.fovoritesService.remove(productId, req);
  }
}
