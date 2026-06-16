import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { TransferService } from '../../application/services/transfer.service';
import { Transfer } from '../../domain/entities/transfer.entity';
import { CreateTransferInput } from '../inputs/create-transfer.input';

@Resolver('Transfer')
export class TransferResolver {
  constructor(private readonly transferService: TransferService) {}

  @Mutation(() => Transfer)
  async createTransfer(@Args('input') createTransferInput: CreateTransferInput) {
    return this.transferService.createTransfer(createTransferInput);
  }
}