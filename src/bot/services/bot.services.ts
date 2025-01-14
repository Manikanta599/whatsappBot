
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Client, LocalAuth } from 'whatsapp-web.js';

@Injectable()
export class BotService implements OnModuleInit {
  private client: Client = new Client({
    authStrategy: new LocalAuth(),
  });
  private readonly logger = new Logger(BotService.name);

  constructor(private eventEmitter: EventEmitter2) {}

  onModuleInit() {
    this.client.on('qr', (qr) => {
      this.logger.log(
        `QrCode: http://localhost:${3000}/bot/qrcode`,
      );
      this.eventEmitter.emit('qrcode.created', qr);
    });

    this.client.on('ready', () => {
      this.logger.log("You're connected successfully!");
    });

    this.client.initialize();
  }
}
