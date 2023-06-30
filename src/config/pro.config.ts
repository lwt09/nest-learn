import { IEnvConfig } from './type';

export async function proConfig(): Promise<IEnvConfig> {
  return {
    database: {
      type: 'mysql',
      host: '192.168.1.243',
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
        host: '192.168.1.243',
        port: 6379,
      },
    },
  };
}
