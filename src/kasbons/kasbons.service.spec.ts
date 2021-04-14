import { Test, TestingModule } from '@nestjs/testing';
import { KasbonsService } from './kasbons.service';

describe('KasbonsService', () => {
  let service: KasbonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KasbonsService],
    }).compile();

    service = module.get<KasbonsService>(KasbonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
