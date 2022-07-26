import { Injectable } from '@nestjs/common';
import { CreateUserAccountInput } from './dto/create-user-account.input';
import { UpdateUserAccountInput } from './dto/update-user-account.input';

@Injectable()
export class UserAccountService {
  create(createUserAccountInput: CreateUserAccountInput) {
    return 'This action adds a new userAccount';
  }

  findAll() {
    return `This action returns all userAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAccount`;
  }

  update(id: number, updateUserAccountInput: UpdateUserAccountInput) {
    return `This action updates a #${id} userAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAccount`;
  }
}
