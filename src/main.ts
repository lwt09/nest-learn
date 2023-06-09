import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import session from 'express-session';

async function bootstrap() {
  console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    // logger: false,
  });
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/',
  });
  app.use(
    session({
      rolling: true,
      secret: 'lwt',
      cookie: {
        maxAge: 99999999,
      },
      name: 'lwt.sid',
      saveUninitialized: false,
    }),
  );
  await app.listen(3000);

  // setTimeout(() => {
  //   app.close();
  // }, 3000);
}
bootstrap();
