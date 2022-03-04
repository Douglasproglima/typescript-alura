export class View {
    constructor(selectorCss) {
        this._elemento = document.querySelector(selectorCss);
    }
    atualizar(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
