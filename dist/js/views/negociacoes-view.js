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
                                        <td>${this.formatarData(negociacao.data)}</td>
                                        <td>${negociacao.qtde}</td>
                                        <td>${this.formatarMoeda(negociacao.valor)}</td>
                                    </tr>
                                `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
    formatarMoeda(valor) {
        return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
}
