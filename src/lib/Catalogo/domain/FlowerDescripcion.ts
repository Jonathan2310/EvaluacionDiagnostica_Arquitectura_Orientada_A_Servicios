export class FlowerDescripcion{
    value: string;

    constructor(value: string) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid(){
        if (typeof this.value !== 'string' || this.value.trim() === '') {
            throw new Error('La descripción no puede estar vacía y debe ser un texto.');
        }
    }
}