import { Controller, Post, Body, Inject, Res, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private logger = new Logger();

  // app.module.ts 中全局注入，这里直接使用
  @Inject(JwtService)
  private readonly jwt: JwtService;

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() updateUser: UpdateUserDto, @Res() res: Response) {
    const findUser = await this.userService.login(updateUser);

    if (findUser) {
      const token = this.jwt.sign({
        id: findUser.id,
        username: findUser.username,
      });

      this.logger.log(`用户${findUser.username}登录成功`);

      res.setHeader('Authorization', `Bearer ${token}`);

      res.send({
        data: findUser,
        code: 0,
      });
    } else {
      res.send('登录失败');
    }
  }
}
