import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }

  @Get('getAll')
  findAll() {
    return this.filmsService.findAll();
  }

  @Get('getById/:id')
  async getById(@Param('id') id: bigint) {
    return await this.filmsService.findFilmWithDetailsById(id);
  }

  @Patch('update/:id')
  async update(@Param('id') id: bigint, @Body() updateFilmDto: UpdateFilmDto) {

    // console.log(updateFilmDto)
    return this.filmsService.update(id, updateFilmDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.filmsService.remove(+id);
  }
}
