import { Entity, Column, UpdateDateColumn, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { Department } from '../../department/entities/department.mysql.entity';


export enum UserStatus {
    disabled = 0,
    enabled = 1
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()//自增主键
    id?: number;

    @Column({ default: null })
    name: string;

    @Column({ default: null })
    username: string;

    @Column({ default: null })
    email: string;

    @Column({ default: null })
    avatar?: string;

    @Column({ default: null })
    mobile?: string;

    @Column({ default: null })
    enName?: string;

    @ManyToOne(() => Department, department => department.users)
    department: Department;

    @Column({ default: UserStatus.enabled })
    status?: UserStatus;

    @UpdateDateColumn()
    updateTime?: string;

    @CreateDateColumn()
    createTime?: string;
}

