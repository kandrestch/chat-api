import { AppDataSource } from "../config/data-source";
import { PrivateMessage } from "../models/privateMessage.entity";

const repository = AppDataSource.getRepository(PrivateMessage);

export const PrivateMessageService = {
    findAll: () => repository.find(),

    findById: (id: number) => repository.findOneBy({ id }),

    create: (data: Partial<PrivateMessage>) => {
        const user = repository.create(data);
        return repository.save(user);
    },

    update: async (id: number, data: Partial<PrivateMessage>) => {
        await repository.update(id, data);
        return repository.findOneBy({ id });
    },

    delete: (id: number) => repository.delete(id),
};