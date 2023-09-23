import { Test, TestingModule } from '@nestjs/testing';
import { BasketController } from './baskets.controller';
import { BasketsService } from './baskets.service';

describe('BasketsController', () => {
  let controller: BasketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasketController],
      providers: [BasketsService],
    }).compile();

    controller = module.get<BasketController>(BasketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
