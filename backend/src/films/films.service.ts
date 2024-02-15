import {Injectable} from '@nestjs/common';
import {CreateFilmDto} from './dto/create-film.dto';
import {UpdateFilmDto} from './dto/update-film.dto';
import {Author} from "../author/entities/author.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {File} from "../file/entities/file.entity";
import {Film} from "./entities/film.entity";
import {Genre} from "../genre/entities/genre.entity";
import {Language} from "../language/entities/language.entity";

@Injectable()
export class FilmsService {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>,
        @InjectRepository(File)
        private readonly fileRepository: Repository<File>,
        @InjectRepository(Film)
        private readonly filmRepository: Repository<Film>,
        @InjectRepository(Genre)
        private readonly genreRepository: Repository<Genre>,
        @InjectRepository(Language)
        private readonly languageRepository: Repository<Language>,
    ) {
    }

    create(createFilmDto: CreateFilmDto) {

        console.log(createFilmDto)
        const filmData =  this.filmRepository.create(createFilmDto)
        return this.filmRepository.save(filmData)

    }

    findAll() {
        return `This action returns all films`;
    }

    findOne(id: number) {
        return `This action returns a #${id} film`;
    }

    update(id: number, updateFilmDto: UpdateFilmDto) {
        return `This action updates a #${id} film`;
    }
    remove(id: number) {
        return `This action removes a #${id} film`;
    }
}
