import { Flower } from "../../domain/Flower";
import { FlowerId } from "../../domain/FlowerId";
import { FlowerNotFoundError } from "../../domain/FlowerNotFoundError";
import {FlowerRepository} from "../../domain/FlowerRepository";

export class FlowerGetById {
    constructor(private repository: FlowerRepository){}

    async run(id: string): Promise<Flower> {
        const flower = await this.repository.getById(new FlowerId(id));

        if (!flower) throw new FlowerNotFoundError('Flower no encontrado.');

        return flower;
    }
}