import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotModule } from './bot/modules/bot.module';
import { BotController } from './bot/controllers/bot.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { BotService } from './bot/services/bot.services';


@Module({
  imports: [BotModule,EventEmitterModule.forRoot()],
  controllers: [AppController,BotController],
  providers: [AppService,BotService],
})
export class AppModule {}
