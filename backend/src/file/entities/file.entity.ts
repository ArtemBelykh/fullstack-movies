import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "../../films/entities/film.entity";
@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: bigint

    @Column()
    name: string

    @ManyToMany(() => Film, (film) => film.file)
    film: Film[]


}
