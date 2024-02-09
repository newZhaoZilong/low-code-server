import { Controller, Get, VERSION_NEUTRAL, Version } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from './common/exceptions/business.exception';
import { ConfigService } from '@nestjs/config';


@Controller({
  path: 'user',
  version: VERSION_NEUTRAL
})
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly configService: ConfigService) { }

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
    try {
      // console.log('haha');
      console.log(a.b.c);
    } catch (error) {
      throw new BusinessException('你这个参数错了');
    }

    return this.appService.getHello();
  }

  @Get('getTestName')
  getTestName() {
    return this.configService.get('TEST_VALUE').name;
  }
}
