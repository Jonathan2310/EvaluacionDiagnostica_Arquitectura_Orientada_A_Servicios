import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "../../Shared/infrastructure/ServiceContainer";
import { FlowerNotFoundError } from "../domain/FlowerNotFoundError";

export class ExpressFlowerController {
    async getAll(req: Request, res: Response, next: NextFunction){
        try{
            const flowers = await ServiceContainer.flower.getAll.run();

            return res.json(flowers.map((flower) => flower.mapToPrimitives())).status(200);
        } catch (error) {
            next(error);
        }
        
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
        const flower = await ServiceContainer.flower.getById.run(req.params.id);
    
        return res.json(flower.mapToPrimitives()).status(200);
        } catch (error) {
        if (error instanceof FlowerNotFoundError) {
            return res.status(404).json({ message: error.message });
        }
    
        next (error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, nombre, descripcion, precio, cantidad, url_imagen } = req.body as {
                id: string;
                nombre: string;
                descripcion: string;
                precio: number;
                cantidad: number;
                url_imagen: string;
            };
            await ServiceContainer.flower.create.run(
                id,
                nombre,
                descripcion,
                precio,
                cantidad,
                url_imagen
            );
    
            return res.status(201).send();
        } catch (error) {
            next (error);
        }
        
    }

    async edit(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, nombre, descripcion, precio, cantidad, url_imagen } = req.body as {
            id: string;
            nombre: string;
            descripcion: string;
            precio: number;
            cantidad: number;
            url_imagen: string;
        };
        await ServiceContainer.flower.edit.run(
            id,
            nombre,
            descripcion,
            precio,
            cantidad,
            url_imagen
        );
    
        return res.status(201).send();
        } catch (error) {
            if (error instanceof FlowerNotFoundError) {
                return res.status(404).json({ message: error.message });
            }

            next (error);
        }
        
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            await ServiceContainer.flower.delete.run(req.params.id);
    
            return res.status(204).send();
        } catch (error) {
            if (error instanceof FlowerNotFoundError) {
                return res.status(404).json({ message: error.message });
            }
            
            next (error);
        }
        
    }
}