import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto, EditNoteDto } from './dto';

const dateReg = /(0?[1-9]|[12][0-9]|3[01])[\/\/.](0?[1-9]|1[012])[\/\/.]\d{4}/g,
  dividerSlash = '/', // Note: if changing dividers -> change the regular expression
  dividerDot = '.';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  getNotes() {
    return this.prisma.note.findMany();
  }

  parseDatesFromContent = (content: String) => {
    const dateStrings = content.match(dateReg);

    if (!dateStrings) return [];

    let datesArray = dateStrings.map((str) => {
      const [day, month, year] =
        str.indexOf(dividerSlash) > 0
          ? str.split(dividerSlash)
          : str.split(dividerDot);

      return new Date(+year, +month - 1, +day);
    });

    return datesArray;
  };

  async createNote(dto: CreateNoteDto) {
    const parsedDates = this.parseDatesFromContent(dto.content);

    const note = await this.prisma.note.create({
      data: {
        name: dto.name,
        category: dto.category,
        content: dto.content,
        dates: parsedDates,
      },
    });

    return note;
  }

  async getNoteById(noteId: number) {
    // find the note by id
    const note = await this.prisma.note.findUnique({
      where: {
        id: noteId,
      },
    });
    // if note does not exist throw exception
    if (!note) throw new NotFoundException('Invalid id');

    return note;
  }

  async editNoteById(noteId: number, dto: EditNoteDto) {
    const note = await this.prisma.note.findUnique({
      where: {
        id: noteId,
      },
    });

    let parsedDates = note.dates;
    if (dto.content) parsedDates = this.parseDatesFromContent(dto.content);

    if (!note) throw new NotFoundException('Invalid id');

    return this.prisma.note.update({
      where: {
        id: noteId,
      },
      data: {
        ...dto,
        dates: parsedDates,
      },
    });
  }

  async deleteNoteById(noteId: number) {
    const note = await this.prisma.note.findUnique({
      where: {
        id: noteId,
      },
    });

    // if note does not exist throw exception
    if (!note) throw new NotFoundException('Invalid id');

    await this.prisma.note.delete({
      where: {
        id: noteId,
      },
    });
  }
}
