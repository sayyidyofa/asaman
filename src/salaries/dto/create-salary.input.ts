import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSalaryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
