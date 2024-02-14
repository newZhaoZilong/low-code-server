import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.mysql.entity';
import { DepartmentService } from '../department/department.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    // @Inject(forwardRef(()=>DepartmentService))
    private readonly departmentService: DepartmentService
  ) { }

  async create(createUserDto: CreateUserDto) {
    const dep = await this.departmentService.findOne(createUserDto.departmentId)
    delete createUserDto.departmentId;
    return this.userRepository.save({
      ...createUserDto,
      department: dep
    })
  }

  findAll() {
    return this.userRepository.find({ relations: ["department"] });
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const dep = await this.departmentService.findOne(updateUserDto.departmentId)
    delete updateUserDto.departmentId;
    return this.userRepository.update({ id }, {
      ...updateUserDto,
      department: dep
    })
  }


  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
