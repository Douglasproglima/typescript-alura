import { IModel } from "../interfaces/imodel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements IModel<Negociacoes> {
    //private _negociacoes: Array<Negociacao> = [];
    private _negociacoes: Negociacao[] = [];

    public adicionar(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    //listar(): ReadonlyArray<Negociacao> {
    public listar(): readonly Negociacao[] {
        return this._negociacoes;
    }

    public toText(): string {
        return `Negociações: ${this._negociacoes}`;
    }

    public isEqual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.listar());
    }
}