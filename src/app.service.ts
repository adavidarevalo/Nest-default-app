import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!! 🚀 mi primer AWS Pipeline';
  }
}
