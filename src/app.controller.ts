import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('vector')
  searchUser(@Query('search') search: string) {
    return this.appService.searchUserWithTextVector(search);
  }

  @Get('like')
  searchUser2(@Query('search') search: string) {
    return this.appService.searchUserWithTextVector(search);
  }
}
