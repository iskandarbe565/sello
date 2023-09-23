import { Test, TestingModule } from '@nestjs/testing';
import { FovoritesController } from './fovorites.controller';
import { FovoritesService } from './fovorites.service';

describe('FovoritesController', () => {
  let controller: FovoritesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FovoritesController],
      providers: [FovoritesService],
    }).compile();

    controller = module.get<FovoritesController>(FovoritesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
