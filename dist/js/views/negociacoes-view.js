export class NegociacoesView {
    constructor(selectorCss) {
        this._elemento = document.querySelector(selectorCss);
    }
    template() {
        return `
            <table class="table table-houver table-borderred">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Qtde.</th>
                        <th>Valor</th>
                    </tr>
                </thead>
            </table>
        `;
    }
    update() {
        this._elemento.innerHTML = this.template();
    }
}
