import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Note } from '@prisma/client';

interface CreateNoteData {
    title: string;
    content: string;
    tags: { tagId: number, status: boolean }[]; // Array de tags seleccionados con su estado
  }
@Injectable()

export class NoteService {
  constructor(private prisma: PrismaService) {}

  

  async getAllNotes(): Promise<Note[]> {
    return await this.prisma.note.findMany();
  }

  async getNotebyId(id: number): Promise<Note> {
    return await this.prisma.note.findUnique({
      where: {
        id,
      },
    });
  }

  async createNote(data: Note): Promise<Note> {
    return await this.prisma.note.create({
      data,
    });
  }  

  async updateNote(id: number, data: Note): Promise<Note> {
    return await this.prisma.note.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteNote(id: number): Promise<Note> {
    return await this.prisma.note.delete({
      where: {
        id,
      },
    });
  }
}
