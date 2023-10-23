import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Language } from "../../language/entities/language.entity";

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

  // @Column()
  // genre: object
  //
  // @Column()
  // file: object
  //
  // @Column()
  // author: object
}
