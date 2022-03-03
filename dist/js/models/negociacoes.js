export class Negociacoes {
    constructor() {
        //private _negociacoes: Array<Negociacao> = [];
        this._negociacoes = [];
    }
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    //listar(): ReadonlyArray<Negociacao> {
    listar() {
        return this._negociacoes;
    }
}
