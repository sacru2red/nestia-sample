import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    if (process.env.NODE_ENV === 'development') {
      return {
        messages: [
          {
            type: 0,
            payload: 'Hello World!',
          },
        ] as const,
      };
    }
    return {};
  }
}
