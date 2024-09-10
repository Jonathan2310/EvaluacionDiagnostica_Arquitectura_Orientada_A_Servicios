import { Flower } from "../../domain/Flower";
import { FlowerRepository } from "../../domain/FlowerRepository";

export class FlowerGetAll {
    constructor(private repository: FlowerRepository) {}

    async run(): Promise<Flower[]> {
        return this.repository.getAll();
    }
}