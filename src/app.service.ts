import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  nestjsWorks(): string {
    return 'nestjs works!';
  }

  getData(data: any): void {
    console.log(data);
  }
}
