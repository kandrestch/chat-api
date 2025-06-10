import { AppDataSource } from "../config/data-source";
import { FriendRequestStatus } from "../models/friendRequestStatus.entity";

const repository = AppDataSource.getRepository(FriendRequestStatus);

export const FriendRequestStatusService = {
    findAll: () => repository.find(),

    findById: (id: number) => repository.findOneBy({ id }),

    create: (data: Partial<FriendRequestStatus>) => {
        const user = repository.create(data);
        return repository.save(user);
    },

    update: async (id: number, data: Partial<FriendRequestStatus>) => {
        await repository.update(id, data);
        return repository.findOneBy({ id });
    },

    delete: (id: number) => repository.delete(id),
};