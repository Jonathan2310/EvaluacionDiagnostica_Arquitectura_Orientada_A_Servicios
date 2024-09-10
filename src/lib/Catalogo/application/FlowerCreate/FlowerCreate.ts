import { Flower } from "../../domain/Flower";
import { FlowerCantidad } from "../../domain/FlowerCantidad";
import { FlowerDescripcion } from "../../domain/FlowerDescripcion";
import { FlowerId } from "../../domain/FlowerId";
import { FlowerImg } from "../../domain/FlowerImg";
import { FlowerNombre } from "../../domain/FlowerNombre";
import { FlowerPrecio } from "../../domain/FlowerPrecio";
import { FlowerRepository } from "../../domain/FlowerRepository";

export class FlowerCreate{
    constructor(private repository: FlowerRepository){}

    async run(
        id: string,
        nombre: string,
        descripcion: string,
        precio: number,
        cantidad: number,
        url_imagen: string
    ): Promise<void> {
        const flower = new Flower(
            new FlowerId(id),
            new FlowerNombre(nombre),
            new FlowerDescripcion(descripcion),
            new FlowerPrecio(precio),
            new FlowerCantidad(cantidad),
            new FlowerImg(url_imagen)
        );

        return this.repository.create(flower);
    }
}