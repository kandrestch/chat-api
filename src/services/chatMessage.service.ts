import { AppDataSource } from "../config/data-source";
import { ChatMessage } from "../models/chatMessage.entity";

const repository = AppDataSource.getRepository(ChatMessage);

export const ChatMessageService = {
    findAll: () => repository.find(),

    findById: (id: number) => repository.findOneBy({ id }),

    create: (data: Partial<ChatMessage>) => {
        const user = repository.create(data);
        return repository.save(user);
    },

    update: async (id: number, data: Partial<ChatMessage>) => {
        await repository.update(id, data);
        return repository.findOneBy({ id });
    },

    delete: (id: number) => repository.delete(id),
};