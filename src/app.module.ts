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
// import { User } from './nest-typeorm/entities/User';
import { createClient } from 'redis';
import { NestRedisModule } from './nest-redis/nest-redis.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtTokenModule } from './jwt-token/jwt-token.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { devConfig } from './config/dev.config';
import { proConfig } from './config/pro.config';

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
    ConfigModule.forRoot({
      isGlobal: true,
      load: [process.env.NODE_ENV === 'production' ? proConfig : devConfig],
    }),
    // 1. 全局注入数据库实例， 每个模块可以使用 manager 来操作数据库了
    TypeOrmModule.forRootAsync({
      imports: [],
      // use factory 作用：可以动态注入 ConfigService，然后根据不同的环境，返回不同的数据库配置，动态注入provider
      // 内部用 [imports]、useFactory、inject 重新构成了 provider 并注入到了 TypeOrmModule 中
      useFactory: async (ConfigService: ConfigService) => {
        const config = ConfigService.get('database');
        // console.log(config, 'config');
        return {
          type: 'mysql',
          host: config.host,
          port: config.port,
          username: config.username,
          password: config.password,
          database: config.database,
          entities: [User],
          synchronize: true,
        };
      },
      // 全局注入过了，所以这里provider想要用就直接inject就好了
      inject: [ConfigService],
    }),
    NestRedisModule,
    // PeriodGlobalModule,

    // jwt 0. 注入 jwt 模块
    JwtModule.register({
      global: true,
      secret: 'lwt',
      signOptions: {
        // 7天过期
        expiresIn: '7d',
      },
    }),
    JwtTokenModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // 1. 注入 redis 客户端实例 并全局导出
    {
      provide: 'REDIDS_CONNECTION',
      useFactory: async (ConfigService: ConfigService) => {
        const redisConfig = ConfigService.get('redis');
        const client = createClient(redisConfig);
        await client.connect();
        return client;
      },
      inject: [ConfigService],
    },
  ],
  exports: ['REDIDS_CONNECTION'],
})
export class AppModule {}
