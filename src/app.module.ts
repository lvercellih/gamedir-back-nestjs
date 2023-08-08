import { Module } from '@nestjs/common';
import { loggerModule } from './logging';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    loggerModule,
    GameModule
  ],
  providers: []
})
export class AppModule {}
