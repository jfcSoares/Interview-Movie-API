import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  releaseDate: Date;

  @ApiProperty({ type: [String] })
  genre: string[];
}
