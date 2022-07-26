import { CreateUserStatInput } from './create-user-stat.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserStatInput extends PartialType(CreateUserStatInput) {
  @Field(() => Int)
  id: number;
}
