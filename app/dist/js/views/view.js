var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logTempoExecucao } from "../decorators/log-tempo-execucao.js";
import { inspect } from "../decorators/inspect.js";
export class View {
    constructor(selectorCss) {
        const elemento = document.querySelector(selectorCss);
        if (elemento)
            this._elemento = elemento;
        else
            throw Error(`Seletor ${selectorCss} não existe no DOM. Verifique!`);
    }
    atualizar(model) {
        let template = this.template(model);
        this._elemento.innerHTML = template;
    }
}
__decorate([
    logTempoExecucao(true),
    inspect
], View.prototype, "atualizar", null);