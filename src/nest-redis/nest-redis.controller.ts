import { Controller, Get } from '@nestjs/common';
import { NestRedisService } from './nest-redis.service';

@Controller('nest-redis')
export class NestRedisController {
  constructor(private readonly nestRedisService: NestRedisService) {}

  @Get()
  async getHello() {
    return {
      data: await this.nestRedisService.getHello(),
      msg: 'Hello World!',
    };
  }
}
