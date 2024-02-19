import {Injectable} from '@nestjs/common';
import {CreateLanguageDto} from './dto/create-language.dto';
import {UpdateLanguageDto} from './dto/update-language.dto';
import {Repository} from "typeorm";
import {Language} from "./entities/language.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class LanguageService {
    constructor(@InjectRepository(Language) private readonly languageRepository: Repository<Language>) {
    }

    async create(createLanguageDto: CreateLanguageDto) {
        const languageData = this.languageRepository.create(createLanguageDto)

        return this.languageRepository.save(languageData)
    }

    findAll() {
        return `This action returns all language`;
    }

    findOne(id: number) {
        return `This action returns a #${id} language`;
    }

    update(id: number, updateLanguageDto: UpdateLanguageDto) {
        return `This action updates a #${id} language`;
    }

    remove(id: number) {
        return `This action removes a #${id} language`;
    }
}
