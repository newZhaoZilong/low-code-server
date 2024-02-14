import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';
import { DatabaseModule } from '@app/common/database/database.module';
import { DepartmentModule } from '../department/department.module';

@Module({
  imports: [
    DatabaseModule,
    DepartmentModule,
  ],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
  exports:[UserService]
})
export class UserModule { }
