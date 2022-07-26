import { CreateUserAccountInput } from './create-user-account.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserAccountInput extends PartialType(CreateUserAccountInput) {
  @Field(() => Int)
  id: number;
}
