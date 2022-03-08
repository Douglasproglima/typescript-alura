export abstract class View<T> {
    protected _elemento: HTMLElement;
    private _scape: boolean = false;

    constructor(selectorCss: string, scape?: boolean) {
        this._elemento = document.querySelector(selectorCss);
        if(scape) this._scape = scape;
    }

    public atualizar(model: T): void {
        let template = this.template(model);
        if(this._scape) template = this.RemoverScript(template); 
        this._elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;

    private RemoverScript(scape: string): string {
        const regex = /<script>[\S\s?]*?<\/script>/;
        return scape.replace(regex, '');
    }
}