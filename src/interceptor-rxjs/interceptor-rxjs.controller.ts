import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { InterceptorRxjsService } from './interceptor-rxjs.service';
import { InterceptorRxjsInterceptor } from './interceptor-rxjs.interceptor';

@Controller('interceptor-rxjs')
export class InterceptorRxjsController {
  constructor(
    private readonly interceptorRxjsService: InterceptorRxjsService,
  ) {}

  @Get('/')
  @UseInterceptors(InterceptorRxjsInterceptor)
  getHello() {
    debugger;
    console.log('InterceptorRxjsController getHello');
    return 'hello';
  }
}
