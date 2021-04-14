import { Test, TestingModule } from '@nestjs/testing';
import { WeldingsResolver } from './weldings.resolver';
import { WeldingsService } from './weldings.service';

describe('WeldingsResolver', () => {
  let resolver: WeldingsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeldingsResolver, WeldingsService],
    }).compile();

    resolver = module.get<WeldingsResolver>(WeldingsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
