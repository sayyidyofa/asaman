import { Test, TestingModule } from '@nestjs/testing';
import { WeldingsService } from './weldings.service';

describe('WeldingsService', () => {
  let service: WeldingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeldingsService],
    }).compile();

    service = module.get<WeldingsService>(WeldingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
