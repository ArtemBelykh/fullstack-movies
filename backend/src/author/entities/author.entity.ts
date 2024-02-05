import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "../../films/entities/film.entity";
@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: bigint

    @ManyToOne(() => Film, (film) => film.author)
    film: Film


}
