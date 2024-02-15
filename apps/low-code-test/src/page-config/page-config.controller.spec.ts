import { Test, TestingModule } from '@nestjs/testing';
import { PageConfigController } from './page-config.controller';
import { PageConfigService } from './page-config.service';

describe('PageConfigController', () => {
  let controller: PageConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PageConfigController],
      providers: [PageConfigService],
    }).compile();

    controller = module.get<PageConfigController>(PageConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
