import { Module } from '@nestjs/common';
import { InjectService } from './inject.service';
import { InjectController } from './inject.controller';

/**
 * 依赖注入 - 引用
 * 一般情况下，provider 是通过 @Injectable 声明，然后在 @Module 的 providers 数组里注册的 class。

默认的 token 就是 class，这样不用使用 @Inject 来指定注入的 token。

但也可以用字符串类型的 token，不过注入的时候要用 @Inject 单独指定。

除了可以用 useClass 指定注入的 class，还可以用 useValue 直接指定注入的对象。

如果想动态生成对象，可以使用 useFactory，它的参数也注入 IOC 容器中的对象，然后动态返回 provider 的对象。

如果想起别名，可以用 usExisting 给已有的 token，指定一个新 token。

灵活运用这些 provider 类型，就可以利用 Nest 的 IOC 容器中注入任何对象。
 */

@Module({
  controllers: [InjectController],
  providers: [
    // 引入 class - 自动实例化
    {
      provide: InjectService,
      useClass: InjectService,
    },
    // 引入 值
    {
      provide: 'person',
      useValue: {
        age: 15,
      },
    },
    // 动态引入
    {
      provide: 'customInject',
      useFactory: () => {
        return {
          name: 'lwt',
          age: 25,
        };
      },
    },
    // 动态引入 - 依赖之前的引入
    {
      provide: 'dynamicInject',
      useFactory: (person: { age: number }, service: InjectService) => {
        return {
          name: 'dynamicInject-name',
          age: 'inject person age: ' + person.age,
          desc: service.getHello(),
        };
      },
      inject: ['person', InjectService],
    },
    // 异步引入
    {
      provide: 'asyncInject',
      useFactory: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {
          name: 'asyncInject-name',
        };
      },
    },
  ],
})
export class InjectModule {}
