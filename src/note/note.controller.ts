import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { NoteService } from "./note.service";
import {Note} from '@prisma/client'

@Controller('notes')
export class NoteController {

    constructor(private NoteService: NoteService){}

    @Get()
    async getAllNotes()
    {
        return this.NoteService.getAllNotes()
    }

    @Post()
    async createNote(@Body() data: Note)
    {
        return this.NoteService.createNote(data)
    }

    @Get(':id')
    async getNoteById(@Param('id') id: string)
    {
        const noteFound = await this.NoteService.getNotebyId(Number(id))
        if(!noteFound) throw new NotFoundException('Note does not exist')
            return noteFound
    }

    @Delete(':id')
    async deleteNote(@Param('id') id: string)
    {
        try {
            return  await this.NoteService.deleteNote(Number(id))
        } catch (error) {
            throw new NotFoundException("Note Does not Exist")
        }
        
    }

    @Put(':id')
    async updateNote(@Param('id') id: string, @Body() data: Note)
    {
        try {
            return await this.NoteService.updateNote(Number(id), data)
        } catch (error) {
            throw new NotFoundException("Note does not exist")
        }
    }
}