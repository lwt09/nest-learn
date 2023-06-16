import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

export class testException {
  constructor(a, b) {
    console.log('testFilter constructor');
    console.log(a, b);
  }
}

@Catch(testException)
export class testFilter implements ExceptionFilter {
  catch(exception: testException, host: ArgumentsHost) {
    console.log('testFilter catch');
    console.log(exception);
    console.log(host);
  }
}
