import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export default class TestGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('TestGuard canActivate');
    console.log(context);
    const { request } = context.switchToHttp().getRequest();
    console.log(request);
    // 如果这里返回的是false，那么会被对应异常拦截器拦截，不会进入controller
    return false;
  }
}
