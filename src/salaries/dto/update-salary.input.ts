import { CreateSalaryInput } from './create-salary.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSalaryInput extends PartialType(CreateSalaryInput) {
  @Field(() => Int)
  id: number;
}
