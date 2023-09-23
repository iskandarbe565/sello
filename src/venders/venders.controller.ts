import { Controller, Get, Post, Body, Patch, Param, Delete ,UseGuards} from '@nestjs/common';
import { VendorsService } from './venders.service';
import { CreateVenderDto } from './dto/create-vender.dto';
import { UpdateVenderDto } from './dto/update-vender.dto';
import { ApiTags} from "@nestjs/swagger"
import { Guard } from 'src/shared/guard/auth.guard';
import { VendorGuard } from 'src/shared/guard/vendor.guard';

@Controller('vendors')
@ApiTags('venders')
export class VendorController {
  constructor(private readonly vendorService: VendorsService) {}

  @Post('register')
  register(@Body() createVendorDto: CreateVenderDto) {
    return this.vendorService.register(createVendorDto);
  }

  @Post('login')
  login(@Body() createVendorDto: CreateVenderDto) {
    return this.vendorService.login(createVendorDto);
  }

  @Get()
  findAll() {
    return this.vendorService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendorDto: UpdateVenderDto) {
    return this.vendorService.update(id, updateVendorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendorService.remove(id);
  }
}
