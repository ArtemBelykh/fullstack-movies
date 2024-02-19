import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "../../films/entities/film.entity";
@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    id: bigint


    @Column()
    type: string

    @Column()
    url: string

    @ManyToMany(() => Film, (film) => film.genre)
    film: Film[]


}
