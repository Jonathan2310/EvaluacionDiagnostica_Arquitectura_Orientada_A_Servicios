import { FlowerId } from "../../domain/FlowerId";
import { FlowerNotFoundError } from "../../domain/FlowerNotFoundError";
import { FlowerRepository } from "../../domain/FlowerRepository"

export class FlowerDelete {
    constructor(private repository: FlowerRepository) {}

    async run(id:string): Promise<void> {
        const flowerId = new FlowerId(id);
        const flowerExists = await this.repository.getById(flowerId);

        if (!flowerExists) throw new FlowerNotFoundError("Flower not found");

        await this.repository.delete(flowerId);
    }
}