import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() data: CreateGameDto) {
    return await this.gameService.update(id, data);
  }
}
