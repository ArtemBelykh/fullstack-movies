import {Injectable} from '@nestjs/common';
import {CreateFilmDto} from './dto/create-film.dto';
import {UpdateFilmDto} from './dto/update-film.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Film} from "./entities/film.entity";
import {AuthorService} from "../author/author.service";
import {CreateAuthorDto} from "../author/dto/create-author.dto";
import {Author} from "../author/entities/author.entity";

@Injectable()
export class FilmsService {
    constructor(
        @InjectRepository(Film)
        private readonly filmRepository: Repository<Film>,
        private readonly authorService: AuthorService
    ) {
    }

    create(createFilmDto: CreateFilmDto) {
        const authors: Author[] = createFilmDto.author

        authors.map(author => {
            return this.authorService.create(author)
        });

        // console.log(createAuthorDtos)
        const filmData = this.filmRepository.create(createFilmDto)
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
