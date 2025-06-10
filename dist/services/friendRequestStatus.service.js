"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendRequestStatusService = void 0;
const data_source_1 = require("../config/data-source");
const friendRequestStatus_entity_1 = require("../models/friendRequestStatus.entity");
const repository = data_source_1.AppDataSource.getRepository(friendRequestStatus_entity_1.FriendRequestStatus);
exports.FriendRequestStatusService = {
    findAll: () => repository.find(),
    findById: (id) => repository.findOneBy({ id }),
    create: (data) => {
        const user = repository.create(data);
        return repository.save(user);
    },
    update: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        yield repository.update(id, data);
        return repository.findOneBy({ id });
    }),
    delete: (id) => repository.delete(id),
};
