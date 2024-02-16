import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Author} from "./entities/author.entity";
import {Repository} from "typeorm";

@Injectable()
export class AuthorService {
  constructor(
      @InjectRepository(Author)
      private readonly authorRepository: Repository<Author>
  ) {
  }

  create(createAuthorDto: CreateAuthorDto) {
    const authorData = this.authorRepository.create(createAuthorDto)

    return this.authorRepository.save(authorData)
  }

  findAll() {
    return `This action returns all author`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
