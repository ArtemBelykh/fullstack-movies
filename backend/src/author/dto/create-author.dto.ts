import {Film} from "../../films/entities/film.entity";

export class CreateAuthorDto {

    name: string;
    photography: string;
    film: Film[];
}