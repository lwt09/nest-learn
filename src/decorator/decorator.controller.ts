import {
  Controller,
  Get,
  SetMetadata,
  UseGuards,
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { DecoratorService } from './decorator.service';
import { SayRolesGuard } from './decorator/sayRolesGuard.guard';
import { Request } from 'express';

// 自定义 方法 装饰器
const SetRoles = (...roles: string[]) => SetMetadata('roles', roles);

function conbineDecorators(path, role) {
  return applyDecorators(Get(path), SetRoles(role), UseGuards(SayRolesGuard));
}

// 自定义 参数 装饰器 (返回请求头)
const MyHeaders = createParamDecorator((key: string, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();
  return key ? request.headers[key] : request.headers;
  // return request.query[key];
});

@Controller('decorator')
export class DecoratorController {
  constructor(private readonly decoratorService: DecoratorService) {}

  // 一、nest 自定义方法装饰器
  // 1. @SetMetadata('roles', ['admin']) 把 roles 写入到元数据中
  // 2. 通过 @UseGuards(SayRolesGuard) 使用 SayRolesGuard 守卫 打印写入的roles
  @Get('test1')
  @SetMetadata('roles', ['admin'])
  @UseGuards(SayRolesGuard)
  test1() {
    return 'test1';
  }

  // 3. 自定义 @SetRoles('admin') 把 roles 写入到元数据中
  @Get('test2')
  @SetRoles('admin')
  @UseGuards(SayRolesGuard)
  test2() {
    return 'test2';
  }

  // 4. 合并一下
  @conbineDecorators('test3', 'admin')
  test3() {
    return 'test3';
  }

  // 二、nest 自定义参数装饰器
  @Get('test4')
  test4(@MyHeaders() headers) {
    console.log(headers);
    return headers;
  }
}
