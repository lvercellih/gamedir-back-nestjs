import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/game.dto';

@Controller('games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  async all() {
    return await this.gameService.findAll();
  }

  @Post()
  async create(@Body() data: CreateGameDto) {
    return await this.gameService.create(data);
  }
}
