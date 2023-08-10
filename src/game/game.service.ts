import { Injectable, Logger } from '@nestjs/common';
import { CreateGameDto, GetGameDto } from './dto/game.dto';
import * as initialData from './initial_data.json'
import { GameModel } from './game.model';

@Injectable()
export class GameService {
  private logger = new Logger(GameService.name);
  
  async findAll(): Promise<GetGameDto[]> {
    return await GameModel.query().castTo()
  }

  async create(data: CreateGameDto): Promise<GetGameDto> {
    return await GameModel.query().insert(data).castTo()
  }

  async update(id: string, data: CreateGameDto): Promise<GetGameDto> {
    return await GameModel.query().patchAndFetchById(id, data).castTo()
  }
}
