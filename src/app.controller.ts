import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect()
  getHello() {
    //return this.appService.getHello();
    return { url: 'http://localhost:3000' };
  }
}
