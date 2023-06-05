import { Controller, Get, Inject } from '@nestjs/common';
import { InjectService } from './inject.service';

@Controller('inject')
export class InjectController {
  // 构造器 注入 / 属性 注入 都可以完成 Inject
  constructor(
    @Inject(InjectService) private readonly injectService: InjectService,
    @Inject('person') private readonly person: { age: number },
    @Inject('customInject')
    private readonly customInject: { name: string; age: number },
    @Inject('dynamicInject')
    private readonly dynamicInject: { person: string; age: number },
    @Inject('asyncInject')
    private readonly asyncInject: { name: string },
  ) {}

  @Get()
  test() {
    debugger;
    return this.customInject.age;
  }
}
