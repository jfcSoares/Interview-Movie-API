import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MovieEntity } from './entities/movie.entity';


@Controller('movies')
@ApiTags('movies')
export class MoviesController { //Connects to Service for Movie objects
  constructor(private readonly moviesService: MoviesService) {}

  //CRUD Operations for Movies 

  @Post()
  @ApiCreatedResponse({ type: MovieEntity })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiOkResponse({ type: MovieEntity, isArray: true })
  listMovies(@Query("title") title?: string, @Query("genre") genre?: string) {
    if (title != null) //if user knows movie by title, no need to search by genre
      return this.moviesService.findByTitle(title);
    else if (genre != null) 
      return this.moviesService.findByGenre(genre);
    else
      return this.moviesService.listMovies();
  }

  @Get(':id')
  @ApiOkResponse({ type: MovieEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MovieEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MovieEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.remove(id);
  }

}
