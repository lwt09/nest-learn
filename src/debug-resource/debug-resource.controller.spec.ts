import { Test, TestingModule } from '@nestjs/testing';
import { DebugResourceController } from './debug-resource.controller';
import { DebugResourceService } from './debug-resource.service';

describe('DebugResourceController', () => {
  let controller: DebugResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DebugResourceController],
      providers: [DebugResourceService],
    }).compile();

    controller = module.get<DebugResourceController>(DebugResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
