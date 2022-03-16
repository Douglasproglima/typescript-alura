export class Negociacoes {
    constructor() {
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
