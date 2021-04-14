import { Test, TestingModule } from '@nestjs/testing';
import { OvertimesResolver } from './overtimes.resolver';
import { OvertimesService } from './overtimes.service';

describe('OvertimesResolver', () => {
  let resolver: OvertimesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OvertimesResolver, OvertimesService],
    }).compile();

    resolver = module.get<OvertimesResolver>(OvertimesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
