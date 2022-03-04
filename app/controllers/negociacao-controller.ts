import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQtde: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes =  new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');

    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQtde = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.update();
    }

    adicionar(): void {
        const negociacao =  this.criarNegociacao();
        this._negociacoes.adicionar(negociacao);
        this._negociacoes.listar();
        
        console.log(this._negociacoes.listar());

        this.limparFormulario();
    }

    criarNegociacao(): Negociacao {
        const valueDateHtml = /-/g;
        const date = new Date(this._inputData.value.replace(valueDateHtml, ','));
        const qtde = parseInt(this._inputQtde.value);
        const valor = parseFloat(this._inputValor.value);

        return new Negociacao(date, qtde, valor);
    }

    limparFormulario(): void {
        this._inputData.value = '';
        this._inputQtde.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}