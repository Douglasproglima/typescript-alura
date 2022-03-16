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
