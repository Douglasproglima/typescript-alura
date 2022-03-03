import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //private _negociacoes: Array<Negociacao> = [];
    private _negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    //listar(): ReadonlyArray<Negociacao> {
    listar(): readonly Negociacao[] {
        return this._negociacoes;
    }
}