import { Module } from '@nestjs/common';
import { ReflectMetaDataService } from './reflect-meta-data.service';
import { ReflectMetaDataController } from './reflect-meta-data.controller';

@Module({
  controllers: [ReflectMetaDataController],
  providers: [ReflectMetaDataService]
})
export class ReflectMetaDataModule {}
