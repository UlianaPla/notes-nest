import { IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  content: string;

  createdAt: Date;

  @IsNotEmpty()
  category: string;

  dates: Date[];
}
