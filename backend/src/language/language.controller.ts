import {Controller, Get, Post, Body, Patch, Param, Delete, Req} from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import {Request} from "express";

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Post('/create')
  create(@Req() request: Request, @Body() createLanguageDto: CreateLanguageDto) {
    const {body} = request
    return this.languageService.create(body);
  }

  @Get('/getAll')
  findAll() {
    return this.languageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageDto: UpdateLanguageDto) {
    return this.languageService.update(+id, updateLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageService.remove(+id);
  }
}
