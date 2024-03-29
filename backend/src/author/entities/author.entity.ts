import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "../../films/entities/film.entity";
@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: bigint

    @Column()
    name: string

    @Column()
    photography: string

    @ManyToMany(() => Film, (film) => film.author)
    film: Film[]



}
