export class FlowerNombre{
    value: string;

    constructor(value: string) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid(){
        if (this.value.trim().length === 0) {
            throw new Error("El nombre no puede estar vacío.");
        }
    }
}