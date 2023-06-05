import { Injectable } from '@nestjs/common';

@Injectable()
export class InjectService {
  getHello(): string {
    return 'Hello World!';
  }
}
