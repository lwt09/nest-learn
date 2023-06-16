import { Injectable } from '@nestjs/common';

@Injectable()
export class MiddlewareService {
  getHello() {
    return 'Hello World from service!';
  }
}
