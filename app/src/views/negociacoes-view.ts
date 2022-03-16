import { scape } from "../decorators/scape.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    @scape
    protected template(model: Negociacoes): string {
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
                        ${model.listar().map(
                            negociacao => {
                                return `
                                    <tr>
                                        <td>${this.formatarData(negociacao.data)}</td>
                                        <td>${negociacao.qtde}</td>
                                        <td>${this.formatarMoeda(negociacao.valor)}</td>
                                    </tr>
                                `;    
                            }
                        ).join('')}
                </tbody>
            </table>
        `;
    }

    private formatarData(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }

    private formatarMoeda(valor: Number): string {
        return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
}