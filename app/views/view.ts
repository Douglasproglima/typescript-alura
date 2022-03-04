export abstract class View<T> {
    protected _elemento: HTMLElement;

    constructor(selectorCss: string) {
        this._elemento = document.querySelector(selectorCss);
    }

    public atualizar(model: T): void {
        this._elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;
}