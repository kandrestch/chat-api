import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
@Entity()
export class PrivateMessage extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'sender_id' })
    sender:User;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'receiver_id' })
    receiver:User;

    @Column()
    image_url: string;

    @Column()
    content: string;

    @Column({ type: 'boolean', default: false })
    seen: boolean;

    //timestamp
}