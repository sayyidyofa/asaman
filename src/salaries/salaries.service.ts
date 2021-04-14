import { Injectable } from '@nestjs/common';
import { CreateSalaryInput } from './dto/create-salary.input';
import { UpdateSalaryInput } from './dto/update-salary.input';

@Injectable()
export class SalariesService {
  create(createSalaryInput: CreateSalaryInput) {
    return 'This action adds a new salary';
  }

  findAll() {
    return `This action returns all salaries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salary`;
  }

  update(id: number, updateSalaryInput: UpdateSalaryInput) {
    return `This action updates a #${id} salary`;
  }

  remove(id: number) {
    return `This action removes a #${id} salary`;
  }
}
