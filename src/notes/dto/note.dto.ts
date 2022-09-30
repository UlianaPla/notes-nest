import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class NoteDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  content: string;

  createdAt: Date;

  @IsNotEmpty()
  category: string;

  dates: Date[];
}
