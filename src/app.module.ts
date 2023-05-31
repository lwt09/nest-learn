import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyTestModule } from './my-test/my-test.module';
import { DebugResourceModule } from './debug-resource/debug-resource.module';

@Module({
  imports: [MyTestModule, DebugResourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
