import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: '' })
    firstname: string;

    @Column({default: '' })
    lastname: string;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column({ default: '' })
    profile_picture_url: string;

    @Column({ type: 'date', nullable: true })
    birthdate: string;
}