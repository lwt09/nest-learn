import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { PipeService } from './pipe.service';
import { CreatePipeDto } from './dto/create-pipe.dto';

@Controller('pipe')
export class PipeController {
  constructor(private readonly pipeService: PipeService) {}

  // body 校验pipe
  @Post()
  create(@Body(new ValidationPipe()) createPipeDto: CreatePipeDto) {
    return this.pipeService.create(createPipeDto);
  }

  @Get('test')
  test(
    @Query('age', ParseIntPipe)
    age: number,
  ) {
    console.log(typeof age);
    return age;
  }
}
