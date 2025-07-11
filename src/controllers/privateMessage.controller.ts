import { Request, Response } from "express";
import {PrivateMessageService as service} from "../services/privateMessage.service";

export const PrivateMessageController = {
    getAll: async (_: Request, res: Response) => {
        const items = await service.findAll();
        res.json(items);
    },

    getById: async (req: Request, res: Response) => {
        const item = await service.findById(+req.params.id);
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

    getByUserIds: async (req: Request, res: Response) => {
        //const { id1, id2 } = req.params;
        const id1=parseInt(req.params.id1);
        const id2=parseInt(req.params.id2);
        console.log("//-------------------"+id1);
        
        const items = await service.findByUserIds(id1, id2);
        res.json(items);
    },
    getByUsernames: async (req: Request, res: Response) => {
        const { username1, username2 } = req.params;
        const items = await service.findByUsernames(username1, username2);
        res.json(items);
    },
};