import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
/* import { Tag } from "@prisma/client";

@Injectable()
export class TagService {
    constructor(private prisma: PrismaService){}

    async getAllTags(): Promise<Tag[]> {
        return await this.prisma.tag.findMany();
      }

      async getTagById(id:number): Promise<Tag> {
        return await this.prisma.tag.findUnique(
            {
                where:{
                    id
                }
            }
        );
      }

      async createTag(data: Tag): Promise<Tag> {
        return await this.prisma.tag.create({
          data,
        });
      }  
} */