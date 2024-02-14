


import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from '@app/common/utils'
import { UserModule } from './user/user.module';



@Module({
  imports: [ConfigModule.forRoot({
    ignoreEnvFile: true,
    isGlobal: true,
    load: [getConfig]
  }),UserModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
