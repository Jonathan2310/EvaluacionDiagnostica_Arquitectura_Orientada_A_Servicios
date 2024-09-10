import { pool } from './mysqlConnection';
import { FlowerRepository } from "../domain/FlowerRepository";
import { Flower } from "../domain/Flower";
import { FlowerId } from "../domain/FlowerId";
import { FlowerNombre } from "../domain/FlowerNombre";
import { FlowerDescripcion } from "../domain/FlowerDescripcion";
import { FlowerPrecio } from "../domain/FlowerPrecio";
import { FlowerCantidad } from "../domain/FlowerCantidad";
import { FlowerImg } from "../domain/FlowerImg";
import { RowDataPacket } from "mysql2";

type MySQLFlower = {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    url_imagen: string;
};

export class MySQLFlowerRepository implements FlowerRepository {
    async create(flower: Flower): Promise<void> {
        const query = `
            INSERT INTO flowers (id, nombre, descripcion, precio, cantidad, url_imagen) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            flower.id.value,
            flower.nombre.value,
            flower.descripcion.value,
            flower.precio.value,
            flower.cantidad.value,
            flower.url_imagen.value,
        ];
    
        await pool.execute(query, values);
    }

    async getAll(): Promise<Flower[]> {
        const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM flowers");
        return rows.map((row) => this.mapToDomain(row as MySQLFlower));
    }

    async getById(id: FlowerId): Promise<Flower | null> {
        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT * FROM flowers WHERE id = ?", 
            [id.value]
        );

        if (rows.length === 0) {
            return null;
        }
    
        return this.mapToDomain(rows[0] as MySQLFlower);
    }

    async edit(flower: Flower): Promise<void> {
        const query = `
            UPDATE flowers 
            SET nombre = ?, descripcion = ?, precio = ?, cantidad = ?, url_imagen = ? 
            WHERE id = ?
        `;
        const values = [
            flower.nombre.value,
            flower.descripcion.value,
            flower.precio.value,
            flower.cantidad.value,
            flower.url_imagen.value,
            flower.id.value,
        ];
    
        await pool.execute(query, values);
    }

    async delete(id: FlowerId): Promise<void> {
        await pool.execute("DELETE FROM flowers WHERE id = ?", [id.value]);
    }

    private mapToDomain(flower: MySQLFlower): Flower {
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
