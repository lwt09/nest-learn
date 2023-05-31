import { Controller, Get, Query } from '@nestjs/common';
import { DebugResourceService } from './debug-resource.service';

@Controller('debug-resource')
export class DebugResourceController {
  constructor(private readonly debugResourceService: DebugResourceService) {
    // node --inspect-brk .\index7.js
    // chrome://inspect/
    // 就可以以第一行进入index7.js的debug模式
  }

  @Get('queryFind')
  queryFind(@Query('id') id: string) {
    debugger;
    // 进入 http://localhost:3000/debug-resource/queryFind?id=1 再打开chrome://inspect/ 就进入断点了
    return `return query id: ${id}`;
  }
}
