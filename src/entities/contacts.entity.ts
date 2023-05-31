import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  BeforeInsert,
} from "typeorm";
import { User } from "./user.entities";
import { Phones } from "./phones.entity";
import { Emails } from "./emails.entity";

@Entity("contacts")
class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  githubUrl: string;

  @Column({ nullable: true })
  linkedinUrl: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @BeforeInsert()
  transformNameToUpperCase() {
    this.name = this.name
      .toLocaleLowerCase()
      .replace(/(^\w{1})|(\s+\w{1})/g, (letra: string) => letra.toUpperCase());
  }

  @ManyToOne(() => User, (users) => users.contacts)
  users: User;

  @OneToMany(() => Phones, (phones) => phones.contacts)
  phones: Phones[];

  @OneToMany(() => Emails, (emails) => emails.contacts)
  emails: Emails[];
}

export { Contacts };
