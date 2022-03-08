import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiaSemana } from "../enums/dia-semana.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView', true);
        this._mensagemView = new MensagemView('#mensagemView');
        this._diasSemana = DiaSemana;
        this._inputData = document.querySelector("#data");
        this._inputQtde = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.atualizar(this._negociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.criar(this._inputData.value, this._inputQtde.value, this._inputValor.value);
        if (this.isFinalSemana(negociacao.data)) {
            this._mensagemView.atualizar('Apenas negociações em dias úteis são aceitas.');
            return;
        }
        this._negociacoes.adicionar(negociacao);
        this._negociacoes.listar();
        this.limparFormulario();
        this.atualizarView();
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
        return dia === this._diasSemana.DOMINGO || dia === this._diasSemana.SABADO;
    }
}
