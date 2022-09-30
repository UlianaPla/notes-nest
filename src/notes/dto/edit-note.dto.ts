import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class EditNoteDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  content?: string;

  @IsOptional()
  category?: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) =>
    typeof value === 'string' ? value === 'true' : value,
  )
  isArchived?: boolean;
}
