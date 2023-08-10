import { Body, Controller, Get, Logger, Param, Patch, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/game.dto';

@Controller('games')
export class GameController {
  private readonly logger = new Logger(GameController.name);

  constructor(private gameService: GameService) {}

  @Get()
  async all() {
    this.logger.log('Getting all games');
    // return await this.gameService.findAll();
    return await this.gameService.findAll();
  }

  @Post()
  async create(@Body() data: CreateGameDto) {
    this.logger.log(`Creating new game ${data.title}`);
    return await this.gameService.create(data);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() data: CreateGameDto) {
    this.logger.warn(`Updating game ${id}`);
    return await this.gameService.update(id, data);
  }
}
