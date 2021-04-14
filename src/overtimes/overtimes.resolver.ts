import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OvertimesService } from './overtimes.service';
import { Overtime } from './entities/overtime.entity';
import { CreateOvertimeInput } from './dto/create-overtime.input';
import { UpdateOvertimeInput } from './dto/update-overtime.input';

@Resolver(() => Overtime)
export class OvertimesResolver {
  constructor(private readonly overtimesService: OvertimesService) {}

  @Mutation(() => Overtime)
  createOvertime(@Args('createOvertimeInput') createOvertimeInput: CreateOvertimeInput) {
    return this.overtimesService.create(createOvertimeInput);
  }

  @Query(() => [Overtime], { name: 'overtimes' })
  findAll() {
    return this.overtimesService.findAll();
  }

  @Query(() => Overtime, { name: 'overtime' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.overtimesService.findOne(id);
  }

  @Mutation(() => Overtime)
  updateOvertime(@Args('updateOvertimeInput') updateOvertimeInput: UpdateOvertimeInput) {
    return this.overtimesService.update(updateOvertimeInput.id, updateOvertimeInput);
  }

  @Mutation(() => Overtime)
  removeOvertime(@Args('id', { type: () => Int }) id: number) {
    return this.overtimesService.remove(id);
  }
}
