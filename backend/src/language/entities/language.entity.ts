import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Film } from "../../films/entities/film.entity";
@Entity()
export class Language {

  @PrimaryGeneratedColumn()
  id: bigint

  @Column()
  name: string

  @Column()
  lang_code: string

  @ManyToMany(() => Film, (film) => film.language)
  film: Film[]
}
