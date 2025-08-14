export default class Cl_gestorSobres {
    constructor() {
        this.acDineroSobres = 0;
    }
    procesarSobre(sobre) {
        this.acDineroSobres += sobre.dineroSobre();
    }
    totalDineroSobres() {
        return this.acDineroSobres;
    }
}
