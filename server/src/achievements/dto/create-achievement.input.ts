import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAchievementInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
