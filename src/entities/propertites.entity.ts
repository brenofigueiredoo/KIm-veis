import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { SchedulesUserProperties } from "./schedulesUserProperties.entity";

@Entity("properties")
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, nullable: false })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ nullable: false })
  updatedAt: Date;

  @OneToOne(() => Addresses, { eager: true })
  @JoinColumn()
  address: Addresses;

  @OneToMany(() => SchedulesUserProperties, (schedules) => schedules.properties)
  schedules: SchedulesUserProperties[];

  @ManyToOne(() => Categories, (categories) => categories.properties)
  category: Categories;
}
