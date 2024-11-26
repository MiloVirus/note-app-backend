import { Module } from '@nestjs/common';
import { NoteModule } from './note/note.module';
/* import { TagModule } from './tag/tag.module'; */

@Module({
  imports: [NoteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
