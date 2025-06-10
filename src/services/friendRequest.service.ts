import { AppDataSource } from "../config/data-source";
import { FriendRequest } from "../models/friendRequest.entity";

const repository = AppDataSource.getRepository(FriendRequest);

export const FriendRequestService = {
    findAll: () => repository.find(),

    findById: (id: number) => repository.findOneBy({ id }),

    create: (data: Partial<FriendRequest>) => {
        const user = repository.create(data);
        return repository.save(user);
    },

    update: async (id: number, data: Partial<FriendRequest>) => {
        await repository.update(id, data);
        return repository.findOneBy({ id });
    },

    delete: (id: number) => repository.delete(id),
};