import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Balance } from '../../domain/entities/balance.entity';

@Injectable()
export class BalanceRepository {
  constructor(
    @InjectRepository(Balance)
    private readonly balanceRepository: Repository<Balance>
  ) {}

  async getBalance(id: string): Promise<Balance> {
    return this.balanceRepository.findOne({ where: { id: parseInt(id, 10) } });
  }

  async createBalance(balance: Balance): Promise<Balance> {
    return this.balanceRepository.save(balance);
  }

  async updateBalance(id: string, balance: Balance): Promise<Balance> {
    await this.balanceRepository.update(parseInt(id, 10), balance);
    return this.balanceRepository.findOne({ where: { id: parseInt(id, 10) } });
  }

  async deleteBalance(id: string): Promise<void> {
    await this.balanceRepository.delete(parseInt(id, 10));
  }
}