import { CreateKasbonInput } from './create-kasbon.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateKasbonInput extends PartialType(CreateKasbonInput) {
  @Field(() => Int)
  id: number;
}
