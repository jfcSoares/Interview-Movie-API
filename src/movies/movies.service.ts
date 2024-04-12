import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService { //Implements all Movie-related operations, by connecting to the Postgres db

  constructor(private prisma: PrismaService) {}

  create(createMovieDto: CreateMovieDto) {
    return this.prisma.movie.create({ data: createMovieDto });
  }

  listMovies() {
    return this.prisma.movie.findMany();
  }

  findOne(id: number) {
    return this.prisma.movie.findMany({ where: {id: id} });
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return this.prisma.movie.update({
      where: { id },
      data: updateMovieDto,
    });
  }

  remove(id: number) {
    return this.prisma.movie.delete({ where: { id } });
  }

  findByTitle(movieTitle: string) {
    return this.prisma.movie.findFirst({ where: { title: movieTitle} });
  }

  findByGenre(reqGenre: string) {
    return this.prisma.movie.findMany({
      where: {
        genre: {
          has: reqGenre
        }
      }
    })
      
  }
}

