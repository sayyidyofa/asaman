import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CrewsService } from './crews.service';
import { Crew } from './entities/crew.entity';
import { CreateCrewInput } from './dto/create-crew.input';
import { UpdateCrewInput } from './dto/update-crew.input';

@Resolver(() => Crew)
export class CrewsResolver {
  constructor(private readonly crewsService: CrewsService) {}

  @Mutation(() => Crew)
  createCrew(@Args('createCrewInput') createCrewInput: CreateCrewInput) {
    return this.crewsService.create(createCrewInput);
  }

  @Query(() => [Crew], { name: 'crews' })
  findAll() {
    return this.crewsService.findAll();
  }

  @Query(() => Crew, { name: 'crew' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.crewsService.findOne(id);
  }

  @Mutation(() => Crew)
  updateCrew(@Args('updateCrewInput') updateCrewInput: UpdateCrewInput) {
    return this.crewsService.update(updateCrewInput.id, updateCrewInput);
  }

  @Mutation(() => Crew)
  removeCrew(@Args('id', { type: () => Int }) id: number) {
    return this.crewsService.remove(id);
  }
}
