import {ApiProperty} from "@nestjs/swagger"

export class CreateCategoryDto {
    @ApiProperty()
    name:String
}
