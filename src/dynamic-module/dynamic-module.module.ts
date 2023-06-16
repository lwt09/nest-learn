import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './dynamic-module.module-definition';
import { DynamicModuleController } from './dynamic-module.controller';

// 2. 动态模块 通过继承 ConfigurableModuleClass 这个东西，就会自动把该模块变成动态模块
// 3. 外部传入的参数，会被provider到这个模块的 MODULE_OPTIONS_TOKEN 这个token上
// 4. controller 通过 Inject(MODULE_OPTIONS_TOKEN) 来获取这个参数
@Module({
  controllers: [DynamicModuleController],
})
export class DynamicModuleModule extends ConfigurableModuleClass {}

// 5. 不用 ConfigurableModuleClass 的话，也可以手动创建 如下
// @Module({})
// export class BbbModule {

//   static register(options: Record<string, any>): DynamicModule {
//     return {
//       module: BbbModule,
//       controllers: [BbbController],
//       providers: [
//         {
//           provide: 'CONFIG_OPTIONS',
//           useValue: options,
//         },
//         BbbService,
//       ],
//       exports: []
//     };
//   }
// }
