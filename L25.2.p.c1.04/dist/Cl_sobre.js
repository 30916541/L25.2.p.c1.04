export default class Cl_sobre {
    constructor(valorBillete, cantidadBillete) {
        this._valorBillete = valorBillete;
        this._cantidadBillete = cantidadBillete;
    }
    set valorBillete(valorBillete) {
        this._valorBillete = valorBillete;
    }
    get valorBillete() {
        return this._valorBillete;
    }
    set cantidadBillete(cantidadBillete) {
        this._cantidadBillete = cantidadBillete;
    }
    get cantidadBillete() {
        return this._cantidadBillete;
    }
    dineroSobre() {
        return this._valorBillete * this._cantidadBillete;
    }
}
