import { ForbiddenException, Injectable } from '@nestjs/common';
import { Note } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { NoteDto } from './dto';

const dateReg = /(0?[1-9]|[12][0-9]|3[01])[\/\/.](0?[1-9]|1[012])[\/\/.]\d{4}/g,
  dividerSlash = '/', // Note: if changing dividers -> change the regular expression
  dividerDot = '.';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  getData() {
    return { msg: 'I return data' };
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

  async postData(dto: NoteDto) {
    const parsedDates = this.parseDatesFromContent(dto.content);

    //save the new note in the db
    try {
      const note = await this.prisma.note.create({
        data: {
          name: dto.name,
          category: dto.category,
          content: dto.content,
          dates: parsedDates,
        },
      });

      //return the saved note
      return note;
    } catch (error) {
      console.log(error);
    }

    return { msg: "I've posted the data" };
  }
}
