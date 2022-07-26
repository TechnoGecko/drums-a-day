import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserStatInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
