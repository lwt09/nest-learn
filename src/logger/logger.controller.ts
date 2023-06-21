import { Controller, Get, Logger } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  private logger = new Logger();

  @Get()
  getHello(): string {
    console.log('-------');
    this.logger.log('logger controller', LoggerController.name);
    return 'hello';
  }
}
