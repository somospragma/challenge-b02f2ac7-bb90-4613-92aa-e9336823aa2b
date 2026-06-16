import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BalanceService } from '../../application/services/balance.service';
import { Balance } from '../../domain/entities/balance.entity';
import { CreateBalanceInput } from '../inputs/create-balance.input';
import { UpdateBalanceInput } from '../inputs/update-balance.input';

@Resolver('Balance')
export class BalanceResolver {
  constructor(private readonly balanceService: BalanceService) {}

  @Query(() => Balance)
  async getBalance(@Args('id') id: string) {
    return this.balanceService.getBalance(id);
  }

  @Mutation(() => Balance)
  async createBalance(@Args('input') createBalanceInput: CreateBalanceInput) {
    return this.balanceService.createBalance(createBalanceInput);
  }

  @Mutation(() => Balance)
  async updateBalance(@Args('id') id: string, @Args('input') updateBalanceInput: UpdateBalanceInput) {
    return this.balanceService.updateBalance(id, updateBalanceInput);
  }

  @Mutation(() => Boolean)
  async deleteBalance(@Args('id') id: string) {
    await this.balanceService.deleteBalance(id);
    return true;
  }
}