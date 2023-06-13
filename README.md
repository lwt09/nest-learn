## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## debug the app

```bash
# debug with vscode
run F5, more detail with ./vscode/launch.json

# debug with chrome
$ npm run start:debug
open chrome with  chrome://inspect/
```

## 常用

### 指令

```bash
# 创建模块
$ nest g resource xxx --no-spec

```

### 全部 nest 内置装饰器

```shell

@Module： 声明 Nest 模块
@Controller：声明模块里的 controller
@Injectable：声明模块里可以注入的 provider
@Inject：通过 token 手动指定注入的 provider，token 可以是 class 或者 string
@Optional：声明注入的 provider 是可选的，可以为空
@Global：声明全局模块
@Catch：声明 exception filter 处理的 exception 类型
@UseFilters：路由级别使用 exception filter
@UsePipes：路由级别使用 pipe
@UseInterceptors：路由级别使用 interceptor
@SetMetadata：在 class 或者 handler 上添加 metadata
@Get、@Post、@Put、@Delete、@Patch、@Options、@Head：声明 get、post、put、delete、patch、options、head 的请求方式
@Param：取出 url 中的参数，比如 /aaa/:id 中的 id
@Query: 取出 query 部分的参数，比如 /aaa?name=xx 中的 name
@Body：取出请求 body，通过 dto class 来接收
@Headers：取出某个或全部请求头
@Session：取出 session 对象，需要启用 express-session 中间件
@HostParm： 取出 host 里的参数
@Req、@Request：注入 request 对象
@Res、@Response：注入 response 对象，一旦注入了这个 Nest 就不会把返回值作为响应了，除非指定 passthrough 为true
@Next：注入调用下一个 handler 的 next 方法
@HttpCode： 修改响应的状态码
@Header：修改响应头
@Redirect：指定重定向的 url
@Render：指定渲染用的模版引擎
```

### AOP

```shell
# AOP 顺序
Middleware(最外层) =>
Guard(判断路由有没有权限访问) =>
ExceptionFilter(异常都会被 ExceptionFilter 处理，返回不同的响应) =>
Interceptor(Contoller 前后扩展一些逻辑) =>
Pipe(对参数做检验和转换)
```

### 自定义装饰器

```shell
# 原生 类装饰器

# 属性装饰器 类的属性
1.原形对象
2.属性的名称

# 方法装饰器 类的方法
1.原形对象
2.方法的名称
3.属性描述符 value是fn 可写对应writable，可枚举对应enumerable，可配置对应configurable

# 参数装饰器 类的函数内的参数
1.原形对象
2.方法的名称
3.参数的位置从0开始
```

```shell
# nest二开后的

# 方法装饰器 类的方法
1.就是传进来的参数

# 参数装饰器 类的函数内的参数
1.传进来的参数
2.ctx(包含req res等)
```
