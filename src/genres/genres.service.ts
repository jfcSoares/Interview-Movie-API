import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MoviesService } from 'src/movies/movies.service';
import { MovieEntity } from 'src/movies/entities/movie.entity';

@Injectable()
export class GenresService {

  constructor(private prisma: PrismaService) {}

  create(createGenreDto: CreateGenreDto) {
    return this.prisma.genre.create({ data: createGenreDto});
  }

  listGenres() {
    return this.prisma.genre.findMany();
  }

  findOne(name: string) {
    return this.prisma.genre.findUnique({ where: {name:name}});
  }

  update(name:string, updateGenreDto: UpdateGenreDto) {
    return this.prisma.genre.update({
      where: { name },
      data: updateGenreDto,
    });
  }

  remove(name:string) {

    //Get movieService instance and filter movies with the removed genre
    const movieServ = new MoviesService(this.prisma);
    const moviesWithGenre = movieServ.findByGenre(name);

    //unsure about this cast
    (moviesWithGenre as unknown as MovieEntity[]).forEach(movie => {
      var genres = movie.genre

      const index = genres.indexOf(name, 0);
      if (index > -1) {
        genres.splice(index, 1); //remove the specified genre from the list of the movie's genres
      }

      movie.genre = genres //replace old value
      movieServ.update(movie.id, movie)
    });

    return this.prisma.genre.delete({ where: { name } });
  }
}
