import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./propertites.entity";
import { User } from "./user.entity";

@Entity("schedules_user_properties")
export class SchedulesUserProperties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => Properties, (properties) => properties.schedules)
  properties: Properties;

  @ManyToOne(() => User, (user) => user.schedules, { eager: true })
  user: User;
}
