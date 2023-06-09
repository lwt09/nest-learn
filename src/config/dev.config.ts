import { IEnvConfig } from './type';

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
