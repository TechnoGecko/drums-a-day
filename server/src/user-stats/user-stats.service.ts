import { Injectable } from '@nestjs/common';
import { CreateUserStatInput } from './dto/create-user-stat.input';
import { UpdateUserStatInput } from './dto/update-user-stat.input';

@Injectable()
export class UserStatsService {
  create(createUserStatInput: CreateUserStatInput) {
    return 'This action adds a new userStat';
  }

  findAll() {
    return `This action returns all userStats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userStat`;
  }

  update(id: number, updateUserStatInput: UpdateUserStatInput) {
    return `This action updates a #${id} userStat`;
  }

  remove(id: number) {
    return `This action removes a #${id} userStat`;
  }
}
