import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { testException, testFilter } from './filter/test-filter';
import TestGuard from './guard/test-guard';

/**
 * 目的：
 * 在guard和filter中，获取ExecutionContext
 * 通过ExecutionContext，获取到当前上下文环境 context.getType() 比如是http还是rpc或者ws
 * 通过ExecutionContext，获取到当前上下文环境的请求和响应对象 context.getRequest() context.getResponse()
 */

@Controller('execution-context')
export class ExecutionContextController {
  // 通过 useGuards 使用守卫
  // 通过 useFilters 使用过滤器 捕获异常
  //  - 可以通过 throw new Error('a') / thorw new testException('a', 'b') 抛出不同的异常
  //  - 在test-filter通过@catch来针对性捕获
  //  -
  @Get('/')
  @UseFilters(testFilter)
  @UseGuards(TestGuard)
  getHello(): string {
    // throw new Error('a');
    throw new testException('a', 'b');
    return 'test';
  }
}
