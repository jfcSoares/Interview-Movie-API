import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GenreEntity } from './entities/genre.entity';

@Controller('genres')
@ApiTags('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  //CRUD Operations for Genres

  @Post()
  @ApiCreatedResponse({ type: GenreEntity })
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  @Get()
  @ApiOkResponse({ type: GenreEntity, isArray: true })
  listGenres() {
    return this.genresService.listGenres();
  }

  @Get(':name')
  @ApiOkResponse({ type: GenreEntity})
  findOne(@Param('name') name: string) {
    return this.genresService.findOne(name);
  }

  @Patch('name')
  @ApiOkResponse({ type: GenreEntity})
  update(@Param('name') name: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService.update(name, updateGenreDto);
  }

  @Delete('name')
  @ApiOkResponse({ type: GenreEntity})
  remove(@Param('name') name: string) {
    return this.genresService.remove(name);
  }
}
