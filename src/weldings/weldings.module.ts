import { Module } from '@nestjs/common';
import { WeldingsService } from './weldings.service';
import { WeldingsResolver } from './weldings.resolver';

@Module({
  providers: [WeldingsResolver, WeldingsService]
})
export class WeldingsModule {}
