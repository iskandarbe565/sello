import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiTags} from "@nestjs/swagger"

@Controller('admin')
@ApiTags("admins")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post('login')
  login(@Body() createOrderDto: CreateAdminDto) {
    return this.adminService.login(createOrderDto);
  }
}