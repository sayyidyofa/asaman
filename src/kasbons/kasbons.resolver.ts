import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { KasbonsService } from './kasbons.service';
import { Kasbon } from './entities/kasbon.entity';
import { CreateKasbonInput } from './dto/create-kasbon.input';
import { UpdateKasbonInput } from './dto/update-kasbon.input';

@Resolver(() => Kasbon)
export class KasbonsResolver {
  constructor(private readonly kasbonsService: KasbonsService) {}

  @Mutation(() => Kasbon)
  createKasbon(@Args('createKasbonInput') createKasbonInput: CreateKasbonInput) {
    return this.kasbonsService.create(createKasbonInput);
  }

  @Query(() => [Kasbon], { name: 'kasbons' })
  findAll() {
    return this.kasbonsService.findAll();
  }

  @Query(() => Kasbon, { name: 'kasbon' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.kasbonsService.findOne(id);
  }

  @Mutation(() => Kasbon)
  updateKasbon(@Args('updateKasbonInput') updateKasbonInput: UpdateKasbonInput) {
    return this.kasbonsService.update(updateKasbonInput.id, updateKasbonInput);
  }

  @Mutation(() => Kasbon)
  removeKasbon(@Args('id', { type: () => Int }) id: number) {
    return this.kasbonsService.remove(id);
  }
}
