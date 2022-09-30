import { IsOptional } from 'class-validator';

export class EditNoteDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  content?: string;

  @IsOptional()
  category?: string;
}
