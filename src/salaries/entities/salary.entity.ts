import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Salary {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
