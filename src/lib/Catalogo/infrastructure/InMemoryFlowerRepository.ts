import { Flower } from '../domain/Flower';
import { FlowerId } from '../domain/FlowerId';
import { FlowerRepository } from '../domain/FlowerRepository';

export class InMemoryFlowerRepository implements FlowerRepository{
    private flowers: Flower[] = [];

    async create(flower: Flower): Promise<void> {
        this.flowers.push(flower);
        console.log('Flor creada:', flower);
    }

    async getAll(): Promise<Flower[]> {
        return this.flowers;
    }

    async getById(id: FlowerId): Promise<Flower | null> {
        return this.flowers.find((flower) => flower.id.value === id.value) || null;
    }

    async edit(flower: Flower): Promise<void> {
        const index = this.flowers.findIndex((u) => u.id.value == flower.id.value);
        this.flowers[index] = flower;
    }

    async delete(id: FlowerId): Promise<void> {
        this.flowers = this.flowers.filter((flower) => flower.id.value !== id.value);
    }
}