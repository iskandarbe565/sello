import { PartialType } from '@nestjs/mapped-types';
import { CreateFovoriteDto } from './create-fovorite.dto';

export class UpdateFovoriteDto extends PartialType(CreateFovoriteDto) {}
