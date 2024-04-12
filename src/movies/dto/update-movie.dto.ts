import { PartialType } from '@nestjs/swagger';
import { CreateMovieDto } from './create-movie.dto';

//DTO for Movie update operations
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
