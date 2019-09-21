import { Controller, Get, Post, Body, ValidationPipe, UsePipes, HttpStatus, HttpException, LoggerService} from '@nestjs/common';
import { InventoryUseCase } from '../usecases/inventory.usecase';
import { KafkaService } from 'src/services/kafka.service';
import { LogService } from 'src/services/log.service';
import { Inventory } from 'src/models/inventory.model';

@Controller("/api/v1/inventory")
export class InventoryController {
  constructor(private readonly inventoryUseCase: InventoryUseCase, private readonly kafkaService: KafkaService, private readonly logService: LogService) {}

  @Post()
  @UsePipes(new ValidationPipe({transform: true}))
  public async addToInventory(@Body() product: Inventory): Promise<void> {
    if (await this.inventoryUseCase.addItemToInventory(product)){
      this.kafkaService.emit(product.toJson())
    } else {
      this.logService.emit("Product already exists");
      throw new HttpException("Product already exists", HttpStatus.CONFLICT);
    }
  }
}
