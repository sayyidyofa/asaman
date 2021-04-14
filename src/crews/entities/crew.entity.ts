import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Crew {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
