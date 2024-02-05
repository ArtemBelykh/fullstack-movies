import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "../../films/entities/film.entity";
@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    id: bigint

    @ManyToOne(() => Film, (film) => film.genre)
    film: Film


}
