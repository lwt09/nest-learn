import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { MiddlewareService } from './middleware.service';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
  constructor(
    @Inject(MiddlewareService) private readonly service: MiddlewareService,
  ) {}
  use(req: Request, res: Response, next: () => void) {
    console.log('before');
    console.log(this.service.getHello());
    next();
    console.log('after');
  }
}
