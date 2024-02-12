import { In, Like, Raw, MongoRepository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.mongo.entity';


@Injectable()
export class UserService{
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: MongoRepository<User>
    ){

    }

    createOrSave(user){
        console.log('t3',user);
        return this.userRepository.save(user);
    }
}