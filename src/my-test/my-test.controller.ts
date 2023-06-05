/* eslint-disable @typescript-eslint/no-var-requires */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { MyTestService } from './my-test.service';
import { CreateMyTestDto } from './dto/create-my-test.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as path from 'path';
// todo: 整理清楚为什么一定要用 import * as;
// import fs from 'fs';
// import path from 'path';

@Controller('my-test')
export class MyTestController {
  constructor(private readonly myTestService: MyTestService) {}

  @Post()
  create(@Body() createMyTestDto: CreateMyTestDto) {
    return this.myTestService.create(createMyTestDto);
  }

  @Get()
  findAll() {
    return this.myTestService.findAll();
  }

  @Get('params/:id')
  findOne(@Param('id') id: string) {
    // return this.myTestService.findOne(+id);
    return `return params id: ${id}`;
  }

  @Get('queryFind')
  queryFind(@Query('id') id: string) {
    return `return query id: ${id}`;
  }

  @Post('postCreate')
  postCreate(@Body() createPerson: CreateMyTestDto) {
    return `return postCreate: ${createPerson.name} ${createPerson.age}`;
  }

  @Post('upload')
  @UseInterceptors(
    AnyFilesInterceptor({
      // 输出到 uploads 文件夹
      // dest: 'uploads/',
    }),
  )
  async uploadFn(
    @Body() createPerson: CreateMyTestDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    // 或者在这里拿到files手动写入文件到本地
    for await (const file of files) {
      console.log(file);
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      fs.writeFileSync(
        path.join(__dirname, '../../uploads', file.originalname),
        file.buffer,
      );
    }
    return `received: ${JSON.stringify(createPerson)}`;
  }

  // @Patch('params/:id')
  // update(@Param('id') id: string, @Body() updateMyTestDto: UpdateMyTestDto) {
  //   return this.myTestService.update(+id, updateMyTestDto);
  // }

  // @Delete('params/:id')
  // remove(@Param('id') id: string) {
  //   return this.myTestService.remove(+id);
  // }

  @Get('test')
  test() {
    this.myTestService.test();
  }
}
