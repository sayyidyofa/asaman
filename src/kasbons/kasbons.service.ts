import { Injectable } from '@nestjs/common';
import { CreateKasbonInput } from './dto/create-kasbon.input';
import { UpdateKasbonInput } from './dto/update-kasbon.input';

@Injectable()
export class KasbonsService {
  create(createKasbonInput: CreateKasbonInput) {
    return 'This action adds a new kasbon';
  }

  findAll() {
    return `This action returns all kasbons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kasbon`;
  }

  update(id: number, updateKasbonInput: UpdateKasbonInput) {
    return `This action updates a #${id} kasbon`;
  }

  remove(id: number) {
    return `This action removes a #${id} kasbon`;
  }
}
