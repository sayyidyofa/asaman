import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Overtime {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
