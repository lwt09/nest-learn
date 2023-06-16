import { Controller, Get } from '@nestjs/common';
import { MiddlewareService } from './middleware.service';

@Controller('middleware')
export class MiddlewareController {
  constructor(private readonly middlewareService: MiddlewareService) {}

  @Get('/')
  getHello() {
    console.log('MiddlewareController getHello');
    return 'hello';
  }
}
