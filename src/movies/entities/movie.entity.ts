import { Movie} from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class MovieEntity implements Movie { //Represents the Movie API entity
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  releaseDate: Date;

  @ApiProperty({ type: [String] })
  genre: string[];

}