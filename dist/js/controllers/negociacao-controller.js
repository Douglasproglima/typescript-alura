import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._inputData = document.querySelector("#data");
        this._inputQtde = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.update();
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this._negociacoes.adicionar(negociacao);
        this._negociacoes.listar();
        console.log(this._negociacoes.listar());
        this.limparFormulario();
    }
    criarNegociacao() {
        const valueDateHtml = /-/g;
        const date = new Date(this._inputData.value.replace(valueDateHtml, ','));
        const qtde = parseInt(this._inputQtde.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(date, qtde, valor);
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQtde.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}
