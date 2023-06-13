import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyTestModule } from './my-test/my-test.module';
import { DebugResourceModule } from './debug-resource/debug-resource.module';
import { InjectModule } from './inject/inject.module';
// import { PeriodGlobalModule } from './period-global/period-global.module';
import { SessionModule } from './session/session.module';
import { DecoratorModule } from './decorator/decorator.module';

@Module({
  imports: [
    MyTestModule,
    DebugResourceModule,
    InjectModule,
    SessionModule,
    DecoratorModule,
    // PeriodGlobalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
