import { Controller, Get, Inject } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './dynamic-module.module-definition';

@Controller('dynamic-module')
export class DynamicModuleController {
  @Inject(MODULE_OPTIONS_TOKEN)
  private readonly options: any;

  @Get('/')
  getHello() {
    return this.options;
  }
}
