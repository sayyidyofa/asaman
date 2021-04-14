import { Test, TestingModule } from '@nestjs/testing';
import { CrewsResolver } from './crews.resolver';
import { CrewsService } from './crews.service';

describe('CrewsResolver', () => {
  let resolver: CrewsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrewsResolver, CrewsService],
    }).compile();

    resolver = module.get<CrewsResolver>(CrewsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
