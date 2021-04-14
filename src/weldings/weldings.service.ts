import { Injectable } from '@nestjs/common';
import { CreateWeldingInput } from './dto/create-welding.input';
import { UpdateWeldingInput } from './dto/update-welding.input';

@Injectable()
export class WeldingsService {
  create(createWeldingInput: CreateWeldingInput) {
    return 'This action adds a new welding';
  }

  findAll() {
    return `This action returns all weldings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} welding`;
  }

  update(id: number, updateWeldingInput: UpdateWeldingInput) {
    return `This action updates a #${id} welding`;
  }

  remove(id: number) {
    return `This action removes a #${id} welding`;
  }
}
