import { Controller } from '@nestjs/common';
import { ReflectMetaDataService } from './reflect-meta-data.service';

@Controller('reflect-meta-data')
export class ReflectMetaDataController {
  constructor(
    private readonly reflectMetaDataService: ReflectMetaDataService,
  ) {}
}

const metadataKey = Symbol('key');

/**
 * Reflect.metadata 会返回一个函数，这个函数会被用来装饰类、属性、方法、参数
 * 形如 function Decorator(target, key, descriptor) { ... }
 * 当Decorator被挂到类上时，target是类的构造函数
 * 会自动执行 Reflect.defineMetadata(metadataKey, type, target) 把我们传入的 metadataKey, type 挂载到target上
 *  这样，通过 Reflect.getMetadata(metadataKey, target) 就可以获取到我们挂载的元数据
 */
function ClassDecorator(type) {
  const test = Reflect.metadata(metadataKey, type);
  // 这个test就是上面提到的 Decorator函数
  return test;
}

function MethodDecorator() {
  return Reflect.metadata(metadataKey, 'method decorator');
}

function PropertyDecorator() {
  return Reflect.metadata(metadataKey, 'property decorator');
}

function ParameterDecorator() {
  return Reflect.metadata(metadataKey, 'parameter decorator');
}

@ClassDecorator(Number)
class Demo {
  @PropertyDecorator()
  name = 'demo';
}

const classMeta = Reflect.getMetadata(metadataKey, Demo);
const propertyMeta = Reflect.getMetadata(metadataKey, Demo.prototype, 'name');

// console.log(111111);
// console.log(classMeta, propertyMeta);
