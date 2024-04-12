import { Genre} from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class GenreEntity implements Genre {
  @ApiProperty()
  name: string;
}
