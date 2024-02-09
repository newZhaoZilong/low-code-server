import { Controller, Get, VERSION_NEUTRAL, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  path: 'user',
  version: '1'
})
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Version([VERSION_NEUTRAL, '1'])
  findAll() {
    return '1 am old one';
  }

  @Get()
  @Version('2')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('findError')
  @Version([VERSION_NEUTRAL, '1'])
  findError() {
    const a: any = {};
    // console.log('haha');
    // console.log(a.b.c);
    return this.appService.getHello();
  }
}
