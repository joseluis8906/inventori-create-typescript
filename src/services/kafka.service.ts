import { Injectable } from '@nestjs/common';
import { KafkaClient, Producer } from 'kafka-node';

@Injectable()
export class KafkaService {
  private kafkaClient: KafkaClient;
  private kafkaProducer: Producer;

  constructor() {
    this.kafkaClient = new KafkaClient({kafkaHost: 'kafka.josecaceres.info:9092'});
    this.kafkaProducer = new Producer(this.kafkaClient);
    this.kafkaProducer.on('ready', () => null);
  }

  public emit(message: string): void {
    this.kafkaProducer.send([{
      topic: 'test',
      messages: [message],
      partition: 0,
      attributes: 1
   }], () => null);
  }
}
