import { Inventory, InventoryModel } from 'src/models/inventory.model';
import { Injectable } from '@nestjs/common';

Injectable()
export class InventoryUseCase {
  async addItemToInventory(inventory: Inventory): Promise<boolean> {
    try {
      await InventoryModel.create(inventory);
    } catch (e) {
      return false;
    }
    return true;
  }
}
