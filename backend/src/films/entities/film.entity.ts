import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
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

  @ManyToMany(() => Language, (language) => language.film)
  @JoinTable()
  language: Language[]

  @ManyToMany(() => Genre, (genre) => genre.film)
  @JoinTable()
  genre: Genre[]

  @ManyToMany(() => File, (file) => file.film)
  @JoinTable()
  file: File[]

  @ManyToMany(() => Author, (author) => author.film)
  @JoinTable()
  author: Author[]
}
