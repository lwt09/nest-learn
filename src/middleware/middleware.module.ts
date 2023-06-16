import { Module, NestModule } from '@nestjs/common';
import { MiddlewareService } from './middleware.service';
import { MiddlewareController } from './middleware.controller';
import { MiddlewareMiddleware } from './middleware.middleware';

@Module({
  controllers: [MiddlewareController],
  providers: [MiddlewareService],
})
export class MiddlewareModule implements NestModule {
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    consumer.apply(MiddlewareMiddleware).forRoutes('middleware');
  }
}
