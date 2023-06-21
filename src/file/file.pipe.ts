import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class FilePipe implements PipeTransform {
  transform(value: Array<Express.Multer.File>, metadata: ArgumentMetadata) {
    for (const file of value) {
      // if (file.size > 1024 * 1024 * 2) {
      if (file.size > 10000) {
        throw new HttpException('文件大小超过2MB', HttpStatus.BAD_REQUEST);
      }
    }
    return value;
  }
}
