import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.mysql.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

@Injectable()
export class DepartmentService {

  constructor(
    @Inject('DEPARTMENT_REPOSITORY')
    private depRepository: Repository<Department>,
    @Inject(forwardRef(()=>UserService))
    private readonly userService: UserService
  ) { }

  async create(createDepartmentDto: CreateDepartmentDto) {

    const users = [];
    for (let i = 0; i < createDepartmentDto.users.length; i++) {
      const user = await this.userService.findOne(createDepartmentDto.users[i]);
      users.push(user);
    }
    return this.depRepository.save({
      ...createDepartmentDto,
      users
    });
  }

  findAll() {
    return this.depRepository.find({relations:["users"]});
  }

  findOne(id: number) {
    return this.depRepository.findOneBy({ id });
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {

    const users = [];
    for (let i = 0; i < updateDepartmentDto.users.length; i++) {
      const user = await this.userService.findOne(updateDepartmentDto.users[i]);
      users.push(user);
    }

    return this.depRepository.update({ id }, {
      ...updateDepartmentDto,
      users
    })
  }

  remove(id: number) {
    return this.depRepository.delete(id);
  }
}
