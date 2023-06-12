import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionService {
  createCode() {
    return 'This action adds a new session';
  }
}
