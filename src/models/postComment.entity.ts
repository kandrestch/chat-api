import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Post } from "./post.entity";
@Entity()
export class PostComment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user:User;

    @ManyToOne(() => Post, { eager: true })
    @JoinColumn({ name: 'post_id' })
    post:Post;

    @Column()
    image_url: string;

    @Column()
    content: string;
}