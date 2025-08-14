export default class Cl_sobre {
    private _valorBillete: number;
    private _cantidadBillete: number;

        // Clase que representa un sobre
        // Contiene atributos y métodos relacionados con el sobre
    constructor(valorBillete: number, cantidadBillete: number) {
        this._valorBillete = valorBillete;
        this._cantidadBillete = cantidadBillete;
    }

    set valorBillete(valorBillete: number) {
        this._valorBillete = valorBillete;
    }

    get valorBillete(): number {
        return this._valorBillete;
    }

    set cantidadBillete(cantidadBillete: number) {
        this._cantidadBillete = cantidadBillete;
    }

    get cantidadBillete(): number {
        return this._cantidadBillete;
    }

    dineroSobre(): number {
        return this._valorBillete * this._cantidadBillete;
    }
}