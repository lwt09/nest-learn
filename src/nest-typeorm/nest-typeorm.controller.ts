import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NestTypeormService } from './nest-typeorm.service';
import { CreateNestTypeormDto } from './dto/create-nest-typeorm.dto';
import { UpdateNestTypeormDto } from './dto/update-nest-typeorm.dto';

@Controller('nest-typeorm')
export class NestTypeormController {
  constructor(private readonly nestTypeormService: NestTypeormService) {}

  @Post()
  create(@Body() createNestTypeormDto: CreateNestTypeormDto) {
    return this.nestTypeormService.create(createNestTypeormDto);
  }

  @Get()
  findAll() {
    return this.nestTypeormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nestTypeormService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNestTypeormDto: UpdateNestTypeormDto,
  ) {
    return this.nestTypeormService.update(+id, updateNestTypeormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nestTypeormService.remove(+id);
  }
}
