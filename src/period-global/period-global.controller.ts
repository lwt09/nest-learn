import {
  BeforeApplicationShutdown,
  Controller,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PeriodGlobalService } from './period-global.service';

@Controller('period-global')
export class PeriodGlobalController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly periodGlobalService: PeriodGlobalService) {}
  onModuleInit() {
    console.log('onModuleInit --- Controller');
  }
  onApplicationBootstrap() {
    console.log('onApplicationBootstrap --- Controller');
  }

  onModuleDestroy() {
    console.log('onModuleDestroy --- Controller');
  }

  beforeApplicationShutdown() {
    console.log('beforeApplicationShutdown --- Controller');
  }

  onApplicationShutdown(signal?: string) {
    console.log('onApplicationShutdown --- Controller ' + '---' + signal);
  }
}
