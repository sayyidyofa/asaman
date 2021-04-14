import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WeldingsService } from './weldings.service';
import { Welding } from './entities/welding.entity';
import { CreateWeldingInput } from './dto/create-welding.input';
import { UpdateWeldingInput } from './dto/update-welding.input';

@Resolver(() => Welding)
export class WeldingsResolver {
  constructor(private readonly weldingsService: WeldingsService) {}

  @Mutation(() => Welding)
  createWelding(@Args('createWeldingInput') createWeldingInput: CreateWeldingInput) {
    return this.weldingsService.create(createWeldingInput);
  }

  @Query(() => [Welding], { name: 'weldings' })
  findAll() {
    return this.weldingsService.findAll();
  }

  @Query(() => Welding, { name: 'welding' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.weldingsService.findOne(id);
  }

  @Mutation(() => Welding)
  updateWelding(@Args('updateWeldingInput') updateWeldingInput: UpdateWeldingInput) {
    return this.weldingsService.update(updateWeldingInput.id, updateWeldingInput);
  }

  @Mutation(() => Welding)
  removeWelding(@Args('id', { type: () => Int }) id: number) {
    return this.weldingsService.remove(id);
  }
}
