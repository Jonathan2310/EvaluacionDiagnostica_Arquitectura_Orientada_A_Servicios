import { Pool } from "pg";
import { FlowerRepository } from "../domain/FlowerRepository";
import { Flower } from "../domain/Flower";
import { FlowerId } from "../domain/FlowerId";
import { FlowerNombre } from "../domain/FlowerNombre";
import { FlowerDescripcion } from "../domain/FlowerDescripcion";
import { FlowerPrecio } from "../domain/FlowerPrecio";
import { FlowerCantidad } from "../domain/FlowerCantidad";
import { FlowerImg } from "../domain/FlowerImg";

type PostgresFlower = {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    url_imagen: string;
};

export class PostgresFlowerRepository implements FlowerRepository {
    client: Pool;

    constructor(databaseUrl: string) {
        this.client = new Pool({
            connectionString: databaseUrl,
        });
    }

    async create(flower: Flower): Promise<void> {
        const query = {
            text: "INSERT INTO flowers (id, nombre, descripcion, precio, cantidad, url_imagen) VALUES ($1, $2, $3, $4, $5)",
            values: [flower.id.value, flower.nombre.value, flower.descripcion.value, flower.precio.value, flower.cantidad.value, flower.url_imagen.value],
        };
    
        await this.client.query(query);
    }

    async getAll(): Promise<Flower[]> {
        const query = {
            text: "SELECT * FROM flowers",
        };
    
        const result = await this.client.query<PostgresFlower>(query);
    
        return result.rows.map((row) => this.mapToDomain(row));
    }

    async getById(id: FlowerId): Promise<Flower | null> {
        const query = {
            text: "SELECT * FROM flowers WHERE id = $1",
            values: [id.value],
        };
    
        const result = await this.client.query<PostgresFlower>(query);

        if (result.rows.length === 0){
            return null;
        }

        const row = result.rows[0];
    
        return this.mapToDomain(row);
    }

    async edit(flower: Flower): Promise<void> {
        const query = {
            text: "UPDATE flowers SET nombre = $1, descripcion = $2, precio = $3, cantidad = $4, url_imagen = $5 WHERE id = $6",
            values: [flower.nombre.value, flower.descripcion.value, flower.precio.value, flower.cantidad.value, flower.url_imagen.value, flower.id.value],
        };
    
        await this.client.query(query);
    }

    async delete(id: FlowerId): Promise<void> {
        const query = {
            text: "DELETE FROM flowers WHERE id = $1",
            values: [id.value],
        };
    
        await this.client.query(query);
    }

    private mapToDomain(flower: PostgresFlower): Flower {
        return new Flower(
            new FlowerId(flower.id),
            new FlowerNombre(flower.nombre),
            new FlowerDescripcion(flower.descripcion),
            new FlowerPrecio(flower.precio),
            new FlowerCantidad(flower.cantidad),
            new FlowerImg(flower.url_imagen),
        );
    }
}