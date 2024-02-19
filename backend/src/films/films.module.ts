import {Module} from '@nestjs/common';
import {FilmsService} from './films.service';
import {FilmsController} from './films.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Film} from "./entities/film.entity";
import {Author} from "../author/entities/author.entity";
import {File} from "../file/entities/file.entity";
import {Genre} from "../genre/entities/genre.entity";
import {Language} from "../language/entities/language.entity";
import {AuthorService} from "../author/author.service";
import {FileService} from "../file/file.service";
import {GenreService} from "../genre/genre.service";
import {LanguageService} from "../language/language.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Film, Author, File, Genre, Language]),
    ],
    controllers: [FilmsController],
    providers: [FilmsService, AuthorService, FileService, GenreService, LanguageService],
    exports: [FilmsService, AuthorService, FileService, GenreService, LanguageService]
})
export class FilmsModule {
}
