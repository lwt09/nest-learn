import { Module } from '@nestjs/common';
import { ExecutionContextController } from './execution-context.controller';

@Module({
  controllers: [ExecutionContextController],
})
export class ExecutionContextModule {}
