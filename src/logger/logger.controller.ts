import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { User } from 'src/nest-custom-orm/nest-custom-orm.module';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  private logger = new Logger();

  // 5. 全局已经可以正常使用了~
  @Inject('NestCustomOrmModuleOptions')
  private instance: any;

  @Get()
  async getHello() {
    const res = await (this.instance as any).find(User);
    this.logger.log('logger controller', LoggerController.name);
    return res;
  }
}
