import { Module } from '@nestjs/common';
import { InventoryController } from './controllers/inventory.controller';
import { InventoryUseCase } from './usecases/inventory.usecase';
import { KafkaService } from './services/kafka.service';
import { LogService } from './services/log.service';
import { InventoryModel, Inventory } from './models/inventory.model';

@Module({
  imports: [],
  controllers: [InventoryController],
  providers: [InventoryUseCase, KafkaService, LogService]
})
export class AppModule {}
