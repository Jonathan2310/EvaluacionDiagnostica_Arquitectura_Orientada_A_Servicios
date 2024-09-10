import { Flower } from "./Flower";
import { FlowerId } from "./FlowerId";

export interface FlowerRepository{
    create(flower: Flower): Promise<void>;
    getAll(): Promise<Flower[]>;
    getById(id: FlowerId): Promise<Flower | null>;
    edit(flower: Flower): Promise<void>;
    delete(id: FlowerId): Promise<void>;
}

