import { Module } from '@nestjs/common';
import { NestRedisService } from './nest-redis.service';
import { NestRedisController } from './nest-redis.controller';

@Module({
  controllers: [NestRedisController],
  providers: [NestRedisService],
})
export class NestRedisModule {}
