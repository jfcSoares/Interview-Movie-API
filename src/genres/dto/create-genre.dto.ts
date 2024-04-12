import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';

  //DTO for a Movie, fulfilling the stated requirements for each field
export class CreateGenreDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

}
