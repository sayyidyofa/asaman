import { Module } from '@nestjs/common';
import { CrewsService } from './crews.service';
import { CrewsResolver } from './crews.resolver';

@Module({
  providers: [CrewsResolver, CrewsService]
})
export class CrewsModule {}
