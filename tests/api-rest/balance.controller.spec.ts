import { Test, TestingModule } from '@nestjs/testing';
import { BalanceController } from '../../src/api-rest/controllers/balance.controller';
import { BalanceService } from '../../src/application/services/balance.service';

describe('BalanceController', () => {
  let controller: BalanceController;
  let service: BalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalanceController],
      providers: [BalanceService],
    }).compile();

    controller = module.get<BalanceController>(BalanceController);
    service = module.get<BalanceService>(BalanceService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});