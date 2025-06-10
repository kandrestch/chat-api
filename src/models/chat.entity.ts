import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
@Entity()
export class Chat extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'admin_id' })
    admin:User;

    @ManyToMany(() => User, { eager: true })
    @JoinTable({
        name: 'chat_user',
        joinColumn: {
            name: 'chat_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
    })
    users: User[];
}