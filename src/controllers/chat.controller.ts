import { Request, Response } from "express";
import {ChatService as service} from "../services/chat.service";

export const ChatController = {
    getAll: async (_: Request, res: Response) => {
        const items = await service.findAll();
        res.json(items);
    },

    getById: async (req: Request, res: Response) => {
        const item = await service.findById(+req.params.id);
        if (item) res.json(item);
        else res.status(404).json({ message: "Not found" });
    },

    getByName: async (req: Request, res: Response) => {
        const name = req.params.name;
        const item = await service.findByName(name);
        if (item) res.json(item);
        else res.status(404).json({ message: "Not found" });
    },

    create: async (req: Request, res: Response) => {
        const newItem = await service.create(req.body);
        res.status(201).json(newItem);
    },

    update: async (req: Request, res: Response) => {
        try {
            const updatedItem = await service.update(+req.params.id, req.body);
            res.json(updatedItem);
        } catch (err: any) {
            res.status(404).json({ message: err.message || "Update failed" });
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            await service.delete(+req.params.id);
            res.status(204).send();
        } catch (err: any) {
            res.status(404).json({ message: err.message || "Delete failed" });
        }
    },

    getByUserId: async (req: Request, res: Response) => {
        const items = await service.findByUserId(+req.params.id);
        res.json(items);
    },
    getByUsername: async (req: Request, res: Response) => {
        const username= req.params.name;
        const items = await service.findByUsername(username);
        res.json(items);
    },
};