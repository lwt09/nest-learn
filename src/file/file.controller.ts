import {
  Body,
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import storage from './file.storage';
import { FilePipe } from './file.pipe';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}
  // 上传file数组，通过storage来控制文件的存储
  // 通过自定义pipe来限制文件的类型与大小
  @Post('/')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage,
    }),
  )
  uploadFile(
    @UploadedFiles(FilePipe) file: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('file-----');
    console.log(file);
    console.log('body-----');
    console.log(body);
    return body;
  }

  // nest 封装好的file pipe
  @Post('fff')
  @UseInterceptors(
    FileInterceptor('aaa', {
      dest: 'uploads',
    }),
  )
  uploadFile3(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('file', file);
  }
}
