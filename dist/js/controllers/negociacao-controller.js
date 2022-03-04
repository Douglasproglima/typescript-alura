import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        //#region Constantes
        this.SABADO = 6;
        this.DOMINGO = 0;
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector("#data");
        this._inputQtde = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.atualizar(this._negociacoes);
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        if (this.isFinalSemana(negociacao.data)) {
            this._mensagemView.atualizar('Apenas negociações em dias úteis são aceitas.');
            return;
        }
        this._negociacoes.adicionar(negociacao);
        this._negociacoes.listar();
        this.limparFormulario();
        this.atualizarView();
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
    atualizarView() {
        this._negociacoesView.atualizar(this._negociacoes);
        this._mensagemView.atualizar('Negociação adicionada com sucesso!');
    }
    isFinalSemana(data) {
        const dia = data.getDay();
        return dia === this.DOMINGO || dia === this.SABADO;
    }
}
