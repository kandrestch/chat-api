import { AppDataSource } from "../config/data-source";
import { PrivateMessage } from "../models/privateMessage.entity";

const repository = AppDataSource.getRepository(PrivateMessage);

export const PrivateMessageService = {
    findAll: () => repository.find(),

    findById: (id: number) => repository.findOneBy({ id }),

    create: (data: Partial<PrivateMessage>) => {
        const { id, ...rest } = data;
        const item = repository.create(rest);
        return repository.save(item);
    },

    update: async (id: number, data: Partial<PrivateMessage>) => {
        await repository.update(id, data);
        return repository.findOneBy({ id });
    },

    delete: (id: number) => repository.delete(id),

    findByUserIds: (id1: number, id2: number) => repository.find({
        where: [
            { sender: { id: id1 }, receiver: { id: id2 } },
            { sender: { id: id2 }, receiver: { id: id1 } },
        ]
    }),

    findByUsernames: (username1: string, username2: string) => repository.find({
        where: [
            { sender: { username: username1 }, receiver: { username: username2 } },
            { sender: { username: username2 }, receiver: { username: username1 } },
        ]
    }),
};