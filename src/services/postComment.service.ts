import { AppDataSource } from "../config/data-source";
import { PostComment } from "../models/postComment.entity";

const repository = AppDataSource.getRepository(PostComment);

export const PostCommentService = {
    findAll: () => repository.find(),

    findById: (id: number) => repository.findOneBy({ id }),

    create: (data: Partial<PostComment>) => {
        const user = repository.create(data);
        return repository.save(user);
    },

    update: async (id: number, data: Partial<PostComment>) => {
        await repository.update(id, data);
        return repository.findOneBy({ id });
    },

    delete: (id: number) => repository.delete(id),
};