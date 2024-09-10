export class FlowerCantidad{
    value: number;

    constructor(value: number) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid(){
        if (typeof this.value !== 'number') {
            throw new Error("El valor debe ser un número.");
        }

        if (this.value <= 0) {
            throw new Error("El valor debe ser un número positivo mayor que 0.");
        }
    }
}