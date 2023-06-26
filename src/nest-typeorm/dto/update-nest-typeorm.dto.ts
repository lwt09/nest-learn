import { PartialType } from '@nestjs/mapped-types';
import { CreateNestTypeormDto } from './create-nest-typeorm.dto';

export class UpdateNestTypeormDto extends PartialType(CreateNestTypeormDto) {}
