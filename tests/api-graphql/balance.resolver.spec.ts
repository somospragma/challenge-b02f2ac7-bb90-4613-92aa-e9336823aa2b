import { Test, TestingModule } from '@nestjs/testing';
import { BalanceResolver } from '../../src/api-graphql/resolvers/balance.resolver';
import { BalanceService } from '../../src/application/services/balance.service';

describe('BalanceResolver', () => {
  let resolver: BalanceResolver;
  let service: BalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalanceResolver, BalanceService],
    }).compile();

    resolver = module.get<BalanceResolver>(BalanceResolver);
    service = module.get<BalanceService>(BalanceService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});