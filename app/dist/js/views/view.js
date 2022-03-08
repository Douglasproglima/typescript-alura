var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
export class View {
    constructor(selectorCss, scape) {
        this._scape = false;
        const elemento = document.querySelector(selectorCss);
        if (elemento)
            this._elemento = elemento;
        else
            throw Error(`Seletor ${selectorCss} não existe no DOM. Verifique!`);
        if (scape)
            this._scape = scape;
    }
    atualizar(model) {
        let template = this.template(model);
        if (this._scape)
            template = this.removerScript(template);
        this._elemento.innerHTML = this.template(model);
    }
    removerScript(scape) {
        const regex = /<script>[\S\s?]*?<\/script>/;
        return scape.replace(regex, '');
    }
}
__decorate([
    logarTempoDeExecucao()
], View.prototype, "atualizar", null);
