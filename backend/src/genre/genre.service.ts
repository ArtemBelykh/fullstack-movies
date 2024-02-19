import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Genre} from "./entities/genre.entity";

@Injectable()
export class GenreService {
  constructor(
      @InjectRepository(Genre)
      private readonly genreRepository: Repository<Genre>
  ) {
  }
  create(createGenreDto: CreateGenreDto) {
    const fileData = this.genreRepository.create(createGenreDto)

    return this.genreRepository.save(fileData)
  }

  findAll() {
    return `This action returns all genre`;
  }

  findOne(id: number) {
    return `This action returns a #${id} genre`;
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
