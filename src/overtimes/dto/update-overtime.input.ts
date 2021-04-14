import { CreateOvertimeInput } from './create-overtime.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOvertimeInput extends PartialType(CreateOvertimeInput) {
  @Field(() => Int)
  id: number;
}
