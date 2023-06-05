import {
  BeforeApplicationShutdown,
  Global,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PeriodGlobalService } from './period-global.service';
import { PeriodGlobalController } from './period-global.controller';

@Global()
@Module({
  controllers: [PeriodGlobalController],
  providers: [PeriodGlobalService],
  // 开启global就向全局暴露了
  exports: [PeriodGlobalService],
})
export class PeriodGlobalModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('onModuleInit --- Module -----');
  }
  onApplicationBootstrap() {
    console.log('onApplicationBootstrap --- Module -----');
  }

  onModuleDestroy() {
    console.log('onModuleDestroy --- Module -----');
  }

  beforeApplicationShutdown() {
    console.log('beforeApplicationShutdown --- Module -----');
  }

  onApplicationShutdown(signal?: string) {
    console.log('onApplicationShutdown --- Module ----- ' + signal);
  }
}
