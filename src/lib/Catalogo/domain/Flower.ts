import { FlowerCantidad } from "./FlowerCantidad";
import { FlowerDescripcion } from "./FlowerDescripcion";
import { FlowerId } from "./FlowerId";
import { FlowerImg } from "./FlowerImg";
import { FlowerNombre } from "./FlowerNombre";
import { FlowerPrecio } from "./FlowerPrecio";

export class Flower {
    id: FlowerId;
    nombre: FlowerNombre;
    descripcion: FlowerDescripcion;
    precio: FlowerPrecio;
    cantidad: FlowerCantidad;
    url_imagen: FlowerImg;

    constructor( id: FlowerId, nombre: FlowerNombre, descripcion: FlowerDescripcion, precio: FlowerPrecio, cantidad: FlowerCantidad, url_imagen: FlowerImg){
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
    this.url_imagen = url_imagen;
    }

    public mapToPrimitives() {
        return{
            id: this.id.value,
            nombre: this.nombre.value,
            descripcion: this.descripcion.value,
            precio: this.precio.value,
            cantidad: this.cantidad.value,
            url_imagen: this.url_imagen.value
        };
    }
}