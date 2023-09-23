import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags} from "@nestjs/swagger"

@Controller('user')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('confirmation/email')
  confirmationEmail(@Body() createUserDto: CreateUserDto) {
    return this.userService.verification(createUserDto);
  }
  @Post('confirm')
  async acceptance(@Body() createUserDto: CreateUserDto) {
    return this.userService.Aspect(createUserDto);
  }
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
