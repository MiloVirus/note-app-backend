/* import { Controller, Get, Post, Body, Param, NotFoundException } from "@nestjs/common";
import { TagService } from "./tag.service";
import { Tag } from "@prisma/client";

@Controller('tags')
export class TagController {

    constructor(private TagService: TagService){}

    @Get()
    async getAllTags()
    {
        return this.TagService.getAllTags()
    }

    @Get(':id')
    async getTagById(@Param('id') id: string)
    {
        const noteFound = await this.TagService.getTagById(Number(id))
        if(!noteFound) throw new NotFoundException('Note does not exist')
            return noteFound
    }

    @Post()
    async createTag(@Body() data: Tag)
    {
        return this.TagService.createTag(data)
    }

} */