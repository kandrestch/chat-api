import { AppDataSource } from "../config/data-source";
import { Chat } from "../models/chat.entity";

const repository = AppDataSource.getRepository(Chat);

export const ChatService = {
    findAll: () => repository.find(),

    findById: (id: number) => repository.findOneBy({ id }),

    findByName: (name: string) => repository.findOneBy({ name }),

    create: (data: Partial<Chat>) => {
        const user = repository.create(data);
        return repository.save(user);
    },

    update: async (id: number, data: Partial<Chat>) => {
        await repository.update(id, data);
        return repository.findOneBy({ id });
    },

    delete: (id: number) => repository.delete(id),

    findByUserId: async (userId: number) => {
        const list = await repository.find();

        return list.filter(chat =>
            chat.users.some(user => user.id === userId) || chat.admin?.id === userId
        );
    },

    findByUsername: async (username: string) => {
        const list = await repository.find();

        return list.filter(chat =>
            chat.users.some(user => user.username === username) || chat.admin?.username === username
        );
    }
};