import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SalariesService } from './salaries.service';
import { Salary } from './entities/salary.entity';
import { CreateSalaryInput } from './dto/create-salary.input';
import { UpdateSalaryInput } from './dto/update-salary.input';

@Resolver(() => Salary)
export class SalariesResolver {
  constructor(private readonly salariesService: SalariesService) {}

  @Mutation(() => Salary)
  createSalary(@Args('createSalaryInput') createSalaryInput: CreateSalaryInput) {
    return this.salariesService.create(createSalaryInput);
  }

  @Query(() => [Salary], { name: 'salaries' })
  findAll() {
    return this.salariesService.findAll();
  }

  @Query(() => Salary, { name: 'salary' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.salariesService.findOne(id);
  }

  @Mutation(() => Salary)
  updateSalary(@Args('updateSalaryInput') updateSalaryInput: UpdateSalaryInput) {
    return this.salariesService.update(updateSalaryInput.id, updateSalaryInput);
  }

  @Mutation(() => Salary)
  removeSalary(@Args('id', { type: () => Int }) id: number) {
    return this.salariesService.remove(id);
  }
}
