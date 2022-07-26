import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserAccount {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
