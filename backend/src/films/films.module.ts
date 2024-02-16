import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Film} from "./entities/film.entity";
import {Author} from "../author/entities/author.entity";
import {File} from "../file/entities/file.entity";
import {Genre} from "../genre/entities/genre.entity";
import {Language} from "../language/entities/language.entity";
import {AuthorService} from "../author/author.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Film, Author,File, Genre, Language]),
  ],
  controllers: [FilmsController],
  providers: [FilmsService, AuthorService],
  exports: [FilmsService, AuthorService]
})
export class FilmsModule {}
