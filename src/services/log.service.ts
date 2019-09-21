import { Injectable } from '@nestjs/common';
import * as logger from 'fluent-logger';

@Injectable()
export class LogService {
  constructor() {
    logger.configure('inventory-create', {
      host: 'jarvis-fluentd',
      port: 24224,
      timeout: 3.0,
      reconnectInterval: 600000 // 10 minutes
    });
  }

  public emit(message: string): void {
    logger.emit({message});
  }
}
