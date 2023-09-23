import { Controller, Get, Post, Body, Patch, Param, Delete ,Req} from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { ApiTags} from "@nestjs/swagger"

@Controller('basket')
@ApiTags('baskets')
export class BasketController {
  constructor(private readonly basketService: BasketsService) {}

  @Post(':praductId')
  create(@Param('praductId') praductId: string, @Req() req: any) {
    return this.basketService.create(praductId, req);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.basketService.findAll(req);
  }

  @Get(':productId')
  findOne(@Param('productId') productId: string, @Req() req: any) {
    return this.basketService.findOne(productId, req);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: any) {
    return this.basketService.remove(id, req);
  }
}
