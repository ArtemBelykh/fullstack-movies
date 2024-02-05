import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "../../films/entities/film.entity";
@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: bigint

    @ManyToOne(() => Film, (film) => film.file)
    film: Film


}
