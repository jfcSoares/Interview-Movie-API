import { ApiProperty } from '@nestjs/swagger';
import {
    IsArray,
    IsDate,
    IsNotEmpty,
    IsString,
  } from 'class-validator';

  //DTO for a Movie, fulfilling the stated requirements for each field
export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  releaseDate: Date;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  genre: string[];
}
