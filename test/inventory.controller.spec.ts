import { Test, TestingModule } from '@nestjs/testing';
import { InventoryController } from '../src/controllers/inventory.controller';
import { InventoryUseCase } from '../src/usecases/inventory.usecase';

describe('AppController', () => {
  let appController: InventoryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InventoryController],
      providers: [InventoryUseCase],
    }).compile();

    appController = app.get<InventoryController>(InventoryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getInventory()).toBe('Hello World!');
    });
  });
});
