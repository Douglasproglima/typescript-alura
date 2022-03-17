var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { scape } from "../decorators/scape.js";
import { Formatter } from "../utils/formatter.js";
import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
            <table class="table table-houver table-borderred">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Qtde.</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                        ${model.listar().map(negociacao => {
            return `
                                    <tr>
                                        <td>${Formatter.formatarData(negociacao.data)}</td>
                                        <td>${negociacao.qtde}</td>
                                        <td>${Formatter.formatarMoeda(negociacao.valor)}</td>
                                    </tr>
                                `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
}
__decorate([
    scape
], NegociacoesView.prototype, "template", null);
//# sourceMappingURL=negociacoes-view.js.map