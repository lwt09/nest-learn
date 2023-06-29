import { Module } from '@nestjs/common';
import { JwtTokenService } from './jwt-token.service';
import { JwtTokenController } from './jwt-token.controller';

@Module({
  controllers: [JwtTokenController],
  providers: [JwtTokenService],
})
export class JwtTokenModule {}
