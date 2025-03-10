import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  nestjsWorks(): string {
    return this.appService.nestjsWorks();
  }

  @Post()
  getData(@Body() data: any): void {
    return this.appService.getData(data);
  }
}
