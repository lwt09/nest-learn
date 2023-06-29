import {
  Controller,
  Get,
  Headers,
  Inject,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtTokenService } from './jwt-token.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('jwt-token')
export class JwtTokenController {
  constructor(private readonly jwtTokenService: JwtTokenService) {}

  // jwt 2. 直接引入
  @Inject(JwtService)
  private readonly jwt: JwtService;

  @Get('/')
  generateToken(
    @Res({
      // return 作为返回body 不用res.send
      passthrough: true,
    })
    res: Response,
    @Headers('Authorization') authorization: string,
  ) {
    if (!authorization) {
      const token = this.jwt.sign({ code: 1 });

      res.setHeader('Authorization', `Bearer ${token}`);
      return {
        data: 1,
        code: 0,
      };
    } else {
      try {
        const token = authorization.split(' ')[1];
        const data = this.jwt.verify(token);

        const newToken = this.jwt.sign({ code: data.code + 1 });

        res.setHeader('Authorization', `Bearer ${newToken}`);

        return {
          data: data.code + 1,
          code: 0,
        };
      } catch (e) {
        console.log(e);
        throw new UnauthorizedException();
      }
    }
  }
}
