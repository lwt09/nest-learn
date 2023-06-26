import { Global, Module } from '@nestjs/common';
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
import { PipeModule } from './pipe/pipe.module';
import { FileModule } from './file/file.module';
import { LoggerModule } from './logger/logger.module';
import { NestTypeormModule } from './nest-typeorm/nest-typeorm.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './nest-typeorm/entities/User';
import { createClient } from 'redis';
import { NestRedisModule } from './nest-redis/nest-redis.module';

@Global()
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
    PipeModule,
    FileModule,
    LoggerModule,

    NestTypeormModule,
    // 1. 全局注入数据库实例， 每个模块可以使用 manager 来操作数据库了
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'docker',
      synchronize: true,
      logging: false,
      entities: [User],
      migrations: [],
      subscribers: [],
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    NestRedisModule,
    // PeriodGlobalModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // 1. 注入 redis 客户端实例 并全局导出
    {
      provide: 'REDIDS_CONNECTION',
      useFactory: async () => {
        const client = createClient({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        });
        await client.connect();
        return client;
      },
    },
  ],
  exports: ['REDIDS_CONNECTION'],
})
export class AppModule {}
