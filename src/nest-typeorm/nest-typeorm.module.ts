import { Module } from '@nestjs/common';
import { NestTypeormService } from './nest-typeorm.service';
import { NestTypeormController } from './nest-typeorm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';

@Module({
  controllers: [NestTypeormController],
  providers: [NestTypeormService],
  // 2. 单独注入User实体，这样就可以在NestTypeormService中使用User实体了
  imports: [TypeOrmModule.forFeature([User])],
})
export class NestTypeormModule {}
