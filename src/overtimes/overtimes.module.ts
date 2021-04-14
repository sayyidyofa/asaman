import { Module } from '@nestjs/common';
import { OvertimesService } from './overtimes.service';
import { OvertimesResolver } from './overtimes.resolver';

@Module({
  providers: [OvertimesResolver, OvertimesService]
})
export class OvertimesModule {}
