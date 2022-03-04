export class NegociacoesView {

    private _elemento: HTMLElement;

    constructor(selectorCss: string) {
        this._elemento = document.querySelector(selectorCss);
    }

    template(): string {
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

    update() :void {
        this._elemento.innerHTML = this.template();
    }
}