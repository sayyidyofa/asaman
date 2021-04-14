import { Injectable } from '@nestjs/common';
import { CreateOvertimeInput } from './dto/create-overtime.input';
import { UpdateOvertimeInput } from './dto/update-overtime.input';

@Injectable()
export class OvertimesService {
  create(createOvertimeInput: CreateOvertimeInput) {
    return 'This action adds a new overtime';
  }

  findAll() {
    return `This action returns all overtimes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} overtime`;
  }

  update(id: number, updateOvertimeInput: UpdateOvertimeInput) {
    return `This action updates a #${id} overtime`;
  }

  remove(id: number) {
    return `This action removes a #${id} overtime`;
  }
}
