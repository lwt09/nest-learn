import { Module } from '@nestjs/common';
import { DebugResourceService } from './debug-resource.service';
import { DebugResourceController } from './debug-resource.controller';

@Module({
  controllers: [DebugResourceController],
  providers: [DebugResourceService]
})
export class DebugResourceModule {}
