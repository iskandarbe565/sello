import { Test, TestingModule } from '@nestjs/testing';
import { VendersService } from './venders.service';

describe('VendersService', () => {
  let service: VendersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendersService],
    }).compile();

    service = module.get<VendersService>(VendersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
