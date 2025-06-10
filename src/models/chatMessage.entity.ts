import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Chat } from "./chat.entity";
@Entity()
export class ChatMessage extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Chat, { eager: true })
    @JoinColumn({ name: 'chat_id' })
    chat:Chat;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'sender_id' })
    sender:User;

    @Column()
    image_url: string;

    @Column()
    content: string;

    //timestamp
}