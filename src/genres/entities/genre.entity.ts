import { Genre} from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class GenreEntity implements Genre { //Represents the Genre API entity
  @ApiProperty()
  name: string;
}
