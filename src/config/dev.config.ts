import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { RedisClientOptions } from 'redis';

export interface IEnvConfig {
  database: TypeOrmModuleOptions;
  redis: RedisClientOptions;
}

export async function devConfig(): Promise<IEnvConfig> {
  return {
    database: {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest_learn',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
      migrations: [],
      subscribers: [],
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    },
    redis: {
      socket: {
        host: 'localhost',
        port: 6379,
      },
    },
  };
}

export async function proConfig(): Promise<IEnvConfig> {
  return {
    database: {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest_learn',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
      migrations: [],
      subscribers: [],
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    },
    redis: {
      socket: {
        host: 'localhost',
        port: 6379,
      },
    },
  };
}
