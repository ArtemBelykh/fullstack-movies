import {Language} from "../../language/entities/language.entity";
import {Genre} from "../../genre/entities/genre.entity";
import {File} from "../../file/entities/file.entity";
import {Author} from "../../author/entities/author.entity";

export class CreateFilmDto {
    title: string;
    year: number;
    description: string;
    rating: string;
    language: Language[]; // Assuming Language is a type representing a language entity
    genre: Genre[]; // Assuming Genre is a type representing a genre entity
    file: File[]; // Assuming File is a type representing a file entity
    author: Author[]; // Assuming Author is a type representing an author entity
}