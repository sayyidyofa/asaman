import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOvertimeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
