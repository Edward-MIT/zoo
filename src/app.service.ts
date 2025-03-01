import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): string {
    return 'Hello World! and people my name is Edward';
  }

  public getDetail(): string {
    return 'Here are Zoo detail';
  }
}
