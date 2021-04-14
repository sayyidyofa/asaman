import { CreateWeldingInput } from './create-welding.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWeldingInput extends PartialType(CreateWeldingInput) {
  @Field(() => Int)
  id: number;
}
