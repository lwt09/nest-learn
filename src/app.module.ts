import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyTestModule } from './my-test/my-test.module';
import { DebugResourceModule } from './debug-resource/debug-resource.module';
import { InjectModule } from './inject/inject.module';
// import { PeriodGlobalModule } from './period-global/period-global.module';
import { SessionModule } from './session/session.module';
import { DecoratorModule } from './decorator/decorator.module';
import { ExecutionContextModule } from './execution-context/execution-context.module';
import { ReflectMetaDataModule } from './reflect-meta-data/reflect-meta-data.module';
import { DynamicModuleModule } from './dynamic-module/dynamic-module.module';
import { MiddlewareModule } from './middleware/middleware.module';
import { InterceptorRxjsModule } from './interceptor-rxjs/interceptor-rxjs.module';

@Module({
  imports: [
    MyTestModule,
    DebugResourceModule,
    InjectModule,
    SessionModule,
    DecoratorModule,
    ExecutionContextModule,
    ReflectMetaDataModule,
    // 1. 动态创建 dynamic 模块，并向该模块内传入参数
    DynamicModuleModule.register({
      name: 'lwt',
      age: 11,
    }),
    MiddlewareModule,
    InterceptorRxjsModule,
    // PeriodGlobalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
