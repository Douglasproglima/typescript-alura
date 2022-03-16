var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiaSemana } from "../enums/dia-semana.js";
import { logTempoExecucao } from "../decorators/log-tempo-execucao.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { inspect } from "../decorators/inspect.js";
import { domInjector } from "../decorators/dom-injector.js";
import { printerLog } from "../utils/printer-log.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._diasSemana = DiaSemana;
        this._negocicaoService = new NegociacoesService();
        this._negociacoesView.atualizar(this._negociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.criar(this._inputData.value, this._inputQtde.value, this._inputValor.value);
        if (this.isFinalSemana(negociacao.data)) {
            this._mensagemView.atualizar('Apenas negociações em dias úteis são aceitas.');
            return;
        }
        this._negociacoes.adicionar(negociacao);
        printerLog(negociacao, this._negociacoes);
        this.limparFormulario();
        this.atualizarView();
    }
    importarDados() {
        this._negocicaoService
            .retornarNegociacoesAtual()
            .then(negociacoesAtual => {
            return negociacoesAtual.filter(negociacaoAtual => {
                return !this._negociacoes
                    .listar()
                    .some(negociacao => negociacao.isEqual(negociacaoAtual));
            });
        })
            .then(negociacoesAtual => {
            for (let negociacao of negociacoesAtual)
                this._negociacoes.adicionar(negociacao);
            this._negociacoesView.atualizar(this._negociacoes);
        });
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
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "_inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "_inputQtde", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "_inputValor", void 0);
__decorate([
    inspect,
    logTempoExecucao()
], NegociacaoController.prototype, "adicionar", null);
