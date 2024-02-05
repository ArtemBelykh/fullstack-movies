import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Language } from "../../language/entities/language.entity";
import {Genre} from "../../genre/entities/genre.entity";
import {File} from "../../file/entities/file.entity";
import {Author} from "../../author/entities/author.entity";

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id: bigint

  @Column()
  title: string

  @Column()
  year: number

  @Column()
  description: string

  @Column()
  rating: string

  @OneToMany(() => Language, (language) => language.film)
  language: Language[]

  @OneToMany(() => Genre, (genre) => genre.film)
  genre: Genre[]

  @OneToMany(() => File, (file) => file.film)
  file: File[]

  @OneToMany(() => Author, (author) => author.film)
  author: Author[]
}
