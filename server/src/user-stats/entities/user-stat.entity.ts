import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserStat {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
