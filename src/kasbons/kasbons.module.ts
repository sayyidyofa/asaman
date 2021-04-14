import { Module } from '@nestjs/common';
import { KasbonsService } from './kasbons.service';
import { KasbonsResolver } from './kasbons.resolver';

@Module({
  providers: [KasbonsResolver, KasbonsService]
})
export class KasbonsModule {}
