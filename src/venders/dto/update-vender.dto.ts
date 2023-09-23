import { PartialType } from '@nestjs/mapped-types';
import { CreateVenderDto } from './create-vender.dto';

export class UpdateVenderDto extends PartialType(CreateVenderDto) {}
