import { IPrinter } from "../interfaces/iprinter.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements IPrinter {
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
}