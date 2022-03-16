export abstract class View<T> {
    protected _elemento: HTMLElement;

    constructor(selectorCss: string) {
        const elemento = document.querySelector(selectorCss);
        
        if(elemento) 
            this._elemento = elemento as HTMLElement;
        else
            throw Error(`Seletor ${selectorCss} não existe no DOM. Verifique!`);
    }

    public atualizar(model: T): void {
        let template = this.template(model);
        this._elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}