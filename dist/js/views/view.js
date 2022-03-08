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
            template = this.RemoverScript(template);
        this._elemento.innerHTML = this.template(model);
    }
    RemoverScript(scape) {
        const regex = /<script>[\S\s?]*?<\/script>/;
        return scape.replace(regex, '');
    }
}
