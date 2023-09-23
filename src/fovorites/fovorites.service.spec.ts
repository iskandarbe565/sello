import { Test, TestingModule } from '@nestjs/testing';
import { FovoritesService } from './fovorites.service';

describe('FovoritesService', () => {
  let service: FovoritesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FovoritesService],
    }).compile();

    service = module.get<FovoritesService>(FovoritesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
