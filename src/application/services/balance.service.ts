import { Injectable } from '@nestjs/common';
import { BalanceRepository } from '../../infrastructure/repositories/balance.repository';
import { Balance } from '../../domain/entities/balance.entity';

@Injectable()
export class BalanceService {
  constructor(private readonly balanceRepository: BalanceRepository) {}

  async getBalance(id: string): Promise<Balance> {
    return this.balanceRepository.getBalance(id);
  }

  async createBalance(balance: Balance): Promise<Balance> {
    return this.balanceRepository.createBalance(balance);
  }

  async updateBalance(id: string, balance: Balance): Promise<Balance> {
    return this.balanceRepository.updateBalance(id, balance);
  }

  async deleteBalance(id: string): Promise<void> {
    await this.balanceRepository.deleteBalance(id);
  }
}