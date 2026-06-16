import { Controller, Post, Body } from '@nestjs/common';
import { TransferService } from '../../application/services/transfer.service';
import { TransferDto } from '../dto/transfer.dto';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  async createTransfer(@Body() createTransferDto: TransferDto) {
    return this.transferService.createTransfer(createTransferDto);
  }
}