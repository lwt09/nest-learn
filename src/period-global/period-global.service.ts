import { Injectable } from '@nestjs/common';

@Injectable()
export class PeriodGlobalService {
  getHello(): string {
    return 'Hello World!';
  }
}
