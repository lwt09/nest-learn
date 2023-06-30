import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { RedisClientOptions } from 'redis';

export interface IEnvConfig {
  database: TypeOrmModuleOptions;
  redis: RedisClientOptions;
}
