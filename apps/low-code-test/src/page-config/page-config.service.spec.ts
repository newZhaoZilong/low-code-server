import { Test, TestingModule } from '@nestjs/testing';
import { PageConfigService } from './page-config.service';

describe('PageConfigService', () => {
  let service: PageConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PageConfigService],
    }).compile();

    service = module.get<PageConfigService>(PageConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
