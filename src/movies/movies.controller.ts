import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('movies')
@ApiTags('movies')
export class MoviesController { //Connects to Service for Movie objects
  constructor(private readonly moviesService: MoviesService) {}

  //CRUD Operations for Movies 

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  listMovies() {
    return this.moviesService.listMovies();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.remove(id);
  }

  //Search endpoints

  @Get()
  searchMoviesByTitle(@Query("title") title: string) {
    return this.moviesService.findByTitle(title);
  }

  @Get()
  searchMoviesByGenre(@Query("genre") genre: string) {
    return this.moviesService.findByGenre(genre);
  }
}
