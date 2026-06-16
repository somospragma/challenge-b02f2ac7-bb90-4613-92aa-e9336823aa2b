import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BalanceService } from '../../application/services/balance.service';
import { BalanceDto } from '../dto/balance.dto';

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get(':id')
  async getBalance(@Param('id') id: string) {
    return this.balanceService.getBalance(id);
  }

  @Post()
  async createBalance(@Body() createBalanceDto: BalanceDto) {
    return this.balanceService.createBalance(createBalanceDto);
  }

  @Put(':id')
  async updateBalance(@Param('id') id: string, @Body() updateBalanceDto: BalanceDto) {
    return this.balanceService.updateBalance(id, updateBalanceDto);
  }

  @Delete(':id')
  async deleteBalance(@Param('id') id: string) {
    return this.balanceService.deleteBalance(id);
  }
}