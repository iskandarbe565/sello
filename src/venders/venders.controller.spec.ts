import { Test, TestingModule } from '@nestjs/testing';
import { VendersController } from './venders.controller';
import { VendersService } from './venders.service';

describe('VendersController', () => {
  let controller: VendersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendersController],
      providers: [VendersService],
    }).compile();

    controller = module.get<VendersController>(VendersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
