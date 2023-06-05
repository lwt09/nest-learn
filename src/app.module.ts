import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyTestModule } from './my-test/my-test.module';
import { DebugResourceModule } from './debug-resource/debug-resource.module';
import { InjectModule } from './inject/inject.module';
import { PeriodGlobalModule } from './period-global/period-global.module';

@Module({
  imports: [
    MyTestModule,
    DebugResourceModule,
    InjectModule,
    PeriodGlobalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
