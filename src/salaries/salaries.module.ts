import { Module } from '@nestjs/common';
import { SalariesService } from './salaries.service';
import { SalariesResolver } from './salaries.resolver';

@Module({
  providers: [SalariesResolver, SalariesService]
})
export class SalariesModule {}
