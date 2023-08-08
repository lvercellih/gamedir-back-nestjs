import { Injectable } from '@nestjs/common';
import { CreateGameDto, GetGameDto } from './dto/game.dto';
import * as initialData from './initial_data.json'

@Injectable()
export class GameService {
  private data = initialData

  create(data: CreateGameDto): GetGameDto {
    const obj = { id: new Date().toISOString(), ...data  }
    this.data.push(obj)
    return obj
  }

  findAll(): GetGameDto[] {
    return this.data;
  }
}
