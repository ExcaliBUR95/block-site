import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAge(): number {
    return 27;
  }

  getName(): string {
    return 'ALikhan';
  }
}
