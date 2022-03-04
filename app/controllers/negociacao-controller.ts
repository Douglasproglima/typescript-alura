import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    //#region Constantes
    private readonly SABADO = 6;
    private readonly DOMINGO = 0;
    //#endregion

    private _inputData: HTMLInputElement;
    private _inputQtde: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes =  new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQtde = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.atualizar(this._negociacoes);
    }

    public adicionar(): void {
        const negociacao =  this.criarNegociacao();

        if(this.isFinalSemana(negociacao.data))
        {
            this._mensagemView.atualizar('Apenas negociações em dias úteis são aceitas.');
            return;   
        }
        
        this._negociacoes.adicionar(negociacao);
        this._negociacoes.listar();
        this.limparFormulario();
        this.atualizarView();
    }

    private criarNegociacao(): Negociacao {
        const valueDateHtml = /-/g;
        const date = new Date(this._inputData.value.replace(valueDateHtml, ','));
        const qtde = parseInt(this._inputQtde.value);
        const valor = parseFloat(this._inputValor.value);

        return new Negociacao(date, qtde, valor);
    }

    private limparFormulario(): void {
        this._inputData.value = '';
        this._inputQtde.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }

    private atualizarView(): void {
        this._negociacoesView.atualizar(this._negociacoes);
        this._mensagemView.atualizar('Negociação adicionada com sucesso!');
    }

    private isFinalSemana(data:Date):Boolean {
        const dia = data.getDay();
        return dia === this.DOMINGO || dia === this.SABADO;
    }
}