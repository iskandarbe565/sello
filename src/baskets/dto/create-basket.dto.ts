import {ApiProperty} from "@nestjs/swagger"

export class CreateBasketDto {
    @ApiProperty()
    name:string
}
