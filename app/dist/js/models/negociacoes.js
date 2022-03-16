import { Printer } from "../utils/printer.js";
export class Negociacoes extends Printer {
    constructor() {
        super(...arguments);
        this._negociacoes = [];
    }
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    listar() {
        return this._negociacoes;
    }
    toText() {
        return `Negociações: ${this._negociacoes}`;
    }
}
