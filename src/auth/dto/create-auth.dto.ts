import {ApiProperty} from "@nestjs/swagger"

export class CreateAuthDto {
    @ApiProperty()
    name:String
}
