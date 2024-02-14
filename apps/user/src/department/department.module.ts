import { Module, forwardRef } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentProviders } from './departmen.providers';
import { DatabaseModule } from '@app/common/database/database.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [DatabaseModule,forwardRef(() => UserModule)],
  controllers: [DepartmentController],
  providers: [...DepartmentProviders, DepartmentService],
  exports: [DepartmentService]
})
export class DepartmentModule { }
