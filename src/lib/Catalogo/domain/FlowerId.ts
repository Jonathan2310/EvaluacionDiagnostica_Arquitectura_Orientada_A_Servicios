export class FlowerId{
    value: string;

    constructor(value: string) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid(){
        if (!/^\d+$/.test(this.value)) {
            throw new Error("El ID debe ser un número.");
        }
    }
}