import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Film } from "../../films/entities/film.entity";
@Entity()
export class Language {

  @PrimaryGeneratedColumn()
  id: bigint

  @Column()
  name: string

  @ManyToOne(() => Film, (film) => film.language, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'lang_id'})
  film: Film

  @Column()
  lang_code: string
}
