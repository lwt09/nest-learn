import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map, tap } from 'rxjs';

@Injectable()
export class InterceptorRxjsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    // 1. 拦截器拦截到请求
    debugger;
    // 2. 执行 next.handle() 方法 进入到controller
    // 3. controller 执行完毕 返回结果
    // 4. pipe 中的 tap 方法执行 （pipe 把一系列 [异步] 的操作都放到一个pipe中去执行）
    // - tap 方法中的操作是异步的，所以不会影响到 controller 的执行, 增加缓存 、 日志等
    // - map 方法中的操作是同步的，所以会影响到 controller 的执行, 修改数据等
    return next.handle().pipe(
      tap(() => {
        debugger;
        return console.log(
          'Api cost Time: ============ After...' + (Date.now() - now) + 'ms',
        );
      }),
      map((data) => {
        debugger;
        return {
          data,
          code: 0,
          message: 'success',
        };
      }),
    );
  }
}
