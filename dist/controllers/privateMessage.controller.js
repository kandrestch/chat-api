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
exports.PrivateMessageController = void 0;
const privateMessage_service_1 = require("../services/privateMessage.service");
exports.PrivateMessageController = {
    getAll: (_, res) => __awaiter(void 0, void 0, void 0, function* () {
        const items = yield privateMessage_service_1.PrivateMessageService.findAll();
        res.json(items);
    }),
    getOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const item = yield privateMessage_service_1.PrivateMessageService.findById(+req.params.id);
        if (item)
            res.json(item);
        else
            res.status(404).json({ message: "Not found" });
    }),
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const newItem = yield privateMessage_service_1.PrivateMessageService.create(req.body);
        res.status(201).json(newItem);
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedItem = yield privateMessage_service_1.PrivateMessageService.update(+req.params.id, req.body);
            res.json(updatedItem);
        }
        catch (err) {
            res.status(404).json({ message: err.message || "Update failed" });
        }
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield privateMessage_service_1.PrivateMessageService.delete(+req.params.id);
            res.status(204).send();
        }
        catch (err) {
            res.status(404).json({ message: err.message || "Delete failed" });
        }
    })
};
