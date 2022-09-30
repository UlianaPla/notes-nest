import { Body, Controller, Get, Post } from '@nestjs/common';
import { NoteDto } from './dto/note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getData() {
    return this.notesService.getData();
  }

  @Post()
  postData(@Body() dto: NoteDto) {
    return this.notesService.postData(dto);
  }

  @Post('signin')
  signin(@Body() dto: NoteDto) {
    return this.notesService.getData();
  }
}
