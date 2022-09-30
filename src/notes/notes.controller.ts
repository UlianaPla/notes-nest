import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EditNoteDto } from './dto';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  createNote(@Body() dto: CreateNoteDto) {
    return this.notesService.createNote(dto);
  }

  @Get(':id')
  getNoteById(@Param('id', ParseIntPipe) noteId: number) {
    return this.notesService.getNoteById(noteId);
  }

  @Get()
  getNotes() {
    return this.notesService.getNotes();
  }

  @Patch(':id')
  editNoteById(
    @Param('id', ParseIntPipe) noteId: number,
    @Body() dto: EditNoteDto,
  ) {
    return this.notesService.editNoteById(noteId, dto);
  }

  @Delete(':id')
  deleteNoteById(@Param('id', ParseIntPipe) noteId: number) {
    return this.notesService.deleteNoteById(noteId);
  }
}
