import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { FriendRequestStatus } from "./friendRequestStatus.entity";
@Entity()
export class FriendRequest extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'sender_id' })
    sender:User;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'receiver_id' })
    receiver:User;

    @ManyToOne(() => FriendRequestStatus, { eager: true })
    @JoinColumn({ name: 'status_id' })
    status:User;
}