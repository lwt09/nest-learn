import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}

@Global()
@Module({})
export class NestCustomOrmModule {
  // 2.动态组件
  static forRoot(options: any) {
    return {
      module: NestCustomOrmModule,
      providers: [
        {
          provide: 'NestCustomOrmModuleOptions',
          useFactory: async () => {
            // 3.创建连接池并返回
            const AppDataSource = new DataSource({
              type: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'root',
              password: '123456',
              database: 'docker',
              synchronize: true,
              logging: false,
              entities: [User],
              migrations: [],
              subscribers: [],
              connectorPackage: 'mysql2',
              extra: {
                authPlugin: 'sha256_password',
              },
            });

            // 初始化数据库连接
            await AppDataSource.connect();
            await AppDataSource.manager.find(User);

            console.log('AppDataSource --------');

            return AppDataSource.getRepository(User);
          },
        },
      ],
      // 4.全局导出连接池
      exports: ['NestCustomOrmModuleOptions'],
    };
  }
}
