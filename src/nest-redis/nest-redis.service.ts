import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class NestRedisService {
  @Inject('REDIDS_CONNECTION')
  private readonly redisClient: any;
  async getHello() {
    return await this.redisClient.get('lwt');
  }
}
