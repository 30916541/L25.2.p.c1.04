import Cl_sobre from './Cl_sobre';

export default class Cl_gestorSobres {
    // Clase que gestiona una colección de sobres
    // Permite agregar, buscar y mostrar sobres
    private acDineroSobres: number = 0;
    constructor() {}
    procesarSobre(sobre: Cl_sobre) {
        this.acDineroSobres += sobre.dineroSobre(); 
    }

    totalDineroSobres(): number {
        return this.acDineroSobres;
    }
}