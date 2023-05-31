import { Test, TestingModule } from '@nestjs/testing';
import { DebugResourceService } from './debug-resource.service';

describe('DebugResourceService', () => {
  let service: DebugResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebugResourceService],
    }).compile();

    service = module.get<DebugResourceService>(DebugResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
