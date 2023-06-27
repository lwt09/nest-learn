import { Controller, Get, Query, Req, Res, Session } from '@nestjs/common';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}
  // 每次重启服务，session都会被清空
  @Get('createCode')
  createCode(@Req() req, @Res() res) {
    // 访问设置 req.session 时候，会自动创建一个session
    // 在 res 时候会自动把 session 对应的 sessionId 放入到 set-cookie中
    if (!req.session.code) req.session.code = 0;
    req.session.code += 1;
    console.log(req.session);
    res.send('code' + req.session.code);
  }

  @Get('confirmCode')
  confirmCode(
    @Req() req,
    @Res() res,
    @Session() session: Record<string, any>,
    @Query() query,
  ) {
    console.log(session.code == query.code);
    res.end('confirmCode: ' + req.session.code);
  }
}
