import { Module } from '@nestjs/common';
import { InterceptorRxjsService } from './interceptor-rxjs.service';
import { InterceptorRxjsController } from './interceptor-rxjs.controller';

@Module({
  controllers: [InterceptorRxjsController],
  providers: [InterceptorRxjsService],
})
export class InterceptorRxjsModule {}
