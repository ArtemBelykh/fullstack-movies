import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateFilmDto} from './dto/create-film.dto';
import {UpdateFilmDto} from './dto/update-film.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Film} from "./entities/film.entity";
import {AuthorService} from "../author/author.service";
import {Author} from "../author/entities/author.entity";
import {FileService} from "../file/file.service";
import {File} from "../file/entities/file.entity";
import {Genre} from "../genre/entities/genre.entity";
import {GenreService} from "../genre/genre.service";
import {Language} from "../language/entities/language.entity";
import {LanguageService} from "../language/language.service";

@Injectable()
export class FilmsService {
    constructor(
        @InjectRepository(Film)
        private readonly filmRepository: Repository<Film>,
        private readonly authorService: AuthorService,
        private readonly fileService: FileService,
        private readonly genreService: GenreService,
        private readonly languageService: LanguageService,
    ) {
    }

    async create(createFilmDto: CreateFilmDto) {
        const language: Language[] = createFilmDto.language;
        const genre: Genre[] = createFilmDto.genre;
        const files: File[] = createFilmDto.file;
        const authors: Author[] = createFilmDto.author;

        const createdAuthors = await Promise.all(authors.map(author => this.authorService.create(author)));
        const createdFiles = await Promise.all(files.map(file => this.fileService.create(file)));
        const createdGenre = await Promise.all(genre.map(genre => this.genreService.create(genre)));
        const createdLanguage = await Promise.all(language.map(lang => this.languageService.create(lang)));

        const filmData = this.filmRepository.create({
            title: createFilmDto.title,
            year: createFilmDto.year,
            description: createFilmDto.description,
            rating: createFilmDto.rating
        });

        filmData.author = createdAuthors;
        filmData.file = createdFiles;
        filmData.genre = createdGenre;
        filmData.language = createdLanguage;

        return this.filmRepository.save(filmData)

    }

    async findFilmWithDetailsById(id: bigint): Promise<any> {
        const film = await this.filmRepository.findOne({
            where: {id},
            relations: ['language', 'genre', 'file', 'author'],
        });

        if (!film) throw new NotFoundException('Film not a found!');

        const authorData = film.author.map(author => ({
            name: author.name,
            photography: author.photography,
        }));

        const fileData = film.file.map(file => ({
            name: file.name
        }));

        const genreData = film.genre.map(genre => ({
            url: genre.url,
            type: genre.type,
        }));

        const languageData = film.language.map(language => ({
            name: language.name,
            lang_code: language.lang_code
        }));

        return {
            title: film.title,
            year: film.year,
            description: film.description,
            rating: film.rating,
            language: [...languageData],
            genre: [...genreData],
            file: [...fileData],
            author: [...authorData],

        };
    }


    async findAll() {
        return await this.filmRepository.find({
            relations: ['language', 'genre', 'file', 'author'],
        })
    }

    async update(id: bigint, updateFilmDto: UpdateFilmDto) {

        const filmToUpdate = await this.filmRepository.findOne({
            where: {id},
            relations: ['language', 'genre', 'file', 'author']
        });

        if (!filmToUpdate) throw new NotFoundException('Film not a found!');


        filmToUpdate.title = updateFilmDto.title;
        filmToUpdate.year = updateFilmDto.year;
        filmToUpdate.description = updateFilmDto.description;
        filmToUpdate.rating = updateFilmDto.rating;

        filmToUpdate.author = [...updateFilmDto.author];
        filmToUpdate.file = [...updateFilmDto.file];
        filmToUpdate.genre = [...updateFilmDto.genre];
        filmToUpdate.language = [...updateFilmDto.language];

        return this.filmRepository.save(filmToUpdate);
    }

    async remove(id: any) {
        const filmToRemove = await this.filmRepository.findOne({where: {id}})

        if (!filmToRemove) throw new NotFoundException('Film not a found!');

        await this.filmRepository.remove(filmToRemove)
        return filmToRemove;


    }
}