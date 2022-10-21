import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Properties } from "./propertites.entity";

@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Properties, (properties) => properties.category)
  properties: Properties[];
}
