import {ApiProperty} from "@nestjs/swagger"

export class CreateUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  birthday: string;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  profilePicture: string;
  @ApiProperty()
  vericationCode: string;
}
