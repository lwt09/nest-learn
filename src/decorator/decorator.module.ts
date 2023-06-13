import { Module } from '@nestjs/common';
import { DecoratorService } from './decorator.service';
import { DecoratorController } from './decorator.controller';
import { SayRolesGuard } from './decorator/sayRolesGuard.guard';

@Module({
  controllers: [DecoratorController],
  providers: [DecoratorService, SayRolesGuard],
})
export class DecoratorModule {}
