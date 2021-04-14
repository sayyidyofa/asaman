import { Test, TestingModule } from '@nestjs/testing';
import { KasbonsResolver } from './kasbons.resolver';
import { KasbonsService } from './kasbons.service';

describe('KasbonsResolver', () => {
  let resolver: KasbonsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KasbonsResolver, KasbonsService],
    }).compile();

    resolver = module.get<KasbonsResolver>(KasbonsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
