import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserStatsService } from './user-stats.service';
import { UserStat } from './entities/user-stat.entity';
import { CreateUserStatInput } from './dto/create-user-stat.input';
import { UpdateUserStatInput } from './dto/update-user-stat.input';

@Resolver(() => UserStat)
export class UserStatsResolver {
  constructor(private readonly userStatsService: UserStatsService) {}

  @Mutation(() => UserStat)
  createUserStat(@Args('createUserStatInput') createUserStatInput: CreateUserStatInput) {
    return this.userStatsService.create(createUserStatInput);
  }

  @Query(() => [UserStat], { name: 'userStats' })
  findAll() {
    return this.userStatsService.findAll();
  }

  @Query(() => UserStat, { name: 'userStat' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userStatsService.findOne(id);
  }

  @Mutation(() => UserStat)
  updateUserStat(@Args('updateUserStatInput') updateUserStatInput: UpdateUserStatInput) {
    return this.userStatsService.update(updateUserStatInput.id, updateUserStatInput);
  }

  @Mutation(() => UserStat)
  removeUserStat(@Args('id', { type: () => Int }) id: number) {
    return this.userStatsService.remove(id);
  }
}
