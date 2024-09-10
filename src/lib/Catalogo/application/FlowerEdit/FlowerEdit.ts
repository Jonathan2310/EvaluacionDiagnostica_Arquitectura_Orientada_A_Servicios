import { Flower } from "../../domain/Flower";
import { FlowerCantidad } from "../../domain/FlowerCantidad";
import { FlowerDescripcion } from "../../domain/FlowerDescripcion";
import { FlowerId } from "../../domain/FlowerId";
import { FlowerImg } from "../../domain/FlowerImg";
import { FlowerNombre } from "../../domain/FlowerNombre";
import { FlowerNotFoundError } from "../../domain/FlowerNotFoundError";
import { FlowerPrecio } from "../../domain/FlowerPrecio";
import { FlowerRepository } from "../../domain/FlowerRepository";

export class FlowerEdit{
    constructor(private repository: FlowerRepository) {}

    async run(id: string, nombre: string, descripcion: string, precio: number, cantidad: number, url_imagen: string) {
            const flower = new Flower(
                new FlowerId(id),
                new FlowerNombre(nombre),
                new FlowerDescripcion(descripcion),
                new FlowerPrecio(precio),
                new FlowerCantidad(cantidad),
                new FlowerImg(url_imagen)
            );

            const flowerExists = await this.repository.getById(flower.id);

            if (!flowerExists) throw new FlowerNotFoundError("Flower not found");

            return this.repository.edit(flower);
        }
}