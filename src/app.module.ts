import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyTestModule } from './my-test/my-test.module';

@Module({
  imports: [MyTestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
