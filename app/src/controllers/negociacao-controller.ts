import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiaSemana } from "../enums/dia-semana.js";
import { logTempoExecucao } from "../decorators/log-tempo-execucao.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { inspect } from "../decorators/inspect.js";
import { domInjector } from "../decorators/dom-injector.js";

export class NegociacaoController {

    @domInjector('#data')
    private _inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private _inputQtde: HTMLInputElement;
    @domInjector('#valor')
    private _inputValor: HTMLInputElement;

    private _negociacoes: Negociacoes =  new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _diasSemana = DiaSemana;
    private _negocicaoService = new NegociacoesService();

    constructor() {
        this._negociacoesView.atualizar(this._negociacoes);
    }

    @inspect
    @logTempoExecucao()
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

    public importarDados(): void {
        this._negocicaoService
            .retornarNegociacoesAtual()
            .then(negociacoesAtual => {
                for(let negociacao of negociacoesAtual)
                    this._negociacoes.adicionar(negociacao);

                this._negociacoesView.atualizar(this._negociacoes);
            });
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