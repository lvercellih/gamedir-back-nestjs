import { Module } from '@nestjs/common';
import { loggerModule } from './logging';
import { GameModule } from './game/game.module';
import { ObjectionModule } from './objection/objection.module';

@Module({
  imports: [
    loggerModule,
    ObjectionModule,
    GameModule
  ],
  providers: []
})
export class AppModule {}
