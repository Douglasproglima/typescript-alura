import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiaSemana } from "../enums/dia-semana.js";
import { logTempoExecucao } from "../decorators/log-tempo-execucao.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQtde: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes =  new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView');
    private _diasSemana = DiaSemana;

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector("#data");
        this._inputQtde = document.querySelector("#quantidade") as HTMLInputElement;
        this._inputValor = document.querySelector("#valor") as HTMLInputElement;
        this._negociacoesView.atualizar(this._negociacoes);
    }

    @logarTempoDeExecucao()
    public adicionar(): void {
        const negociacao =  Negociacao.criar(this._inputData.value, this._inputQtde.value, this._inputValor.value);

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
        return dia === this._diasSemana.DOMINGO || dia === this._diasSemana.SABADO;
    }
}