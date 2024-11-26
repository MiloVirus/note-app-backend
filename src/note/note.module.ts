import { Module } from "@nestjs/common";
import { NoteController } from "./note.controller";
import { NoteService } from "./note.service";
import { prismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [NoteController],
    providers: [NoteService],
    imports: [prismaModule],
})
export class NoteModule {}