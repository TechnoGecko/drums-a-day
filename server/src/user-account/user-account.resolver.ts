import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserAccountService } from './user-account.service';
import { UserAccount } from './entities/user-account.entity';
import { CreateUserAccountInput } from './dto/create-user-account.input';
import { UpdateUserAccountInput } from './dto/update-user-account.input';

@Resolver(() => UserAccount)
export class UserAccountResolver {
  constructor(private readonly userAccountService: UserAccountService) {}

  @Mutation(() => UserAccount)
  createUserAccount(@Args('createUserAccountInput') createUserAccountInput: CreateUserAccountInput) {
    return this.userAccountService.create(createUserAccountInput);
  }

  @Query(() => [UserAccount], { name: 'userAccount' })
  findAll() {
    return this.userAccountService.findAll();
  }

  @Query(() => UserAccount, { name: 'userAccount' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userAccountService.findOne(id);
  }

  @Mutation(() => UserAccount)
  updateUserAccount(@Args('updateUserAccountInput') updateUserAccountInput: UpdateUserAccountInput) {
    return this.userAccountService.update(updateUserAccountInput.id, updateUserAccountInput);
  }

  @Mutation(() => UserAccount)
  removeUserAccount(@Args('id', { type: () => Int }) id: number) {
    return this.userAccountService.remove(id);
  }
}
