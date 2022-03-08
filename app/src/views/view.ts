import { logTempoExecucao } from "../decorators/log-tempo-execucao.js";

export abstract class View<T> {
    protected _elemento: HTMLElement;
    private _scape: boolean = false;

    constructor(selectorCss: string, scape?: boolean) {
        const elemento = document.querySelector(selectorCss);
        
        if(elemento) 
            this._elemento = elemento as HTMLElement;
        else
            throw Error(`Seletor ${selectorCss} não existe no DOM. Verifique!`);

        if(scape) this._scape = scape;
    }

    @logTempoExecucao(true)
    public atualizar(model: T): void {
        let template = this.template(model);
        if(this._scape) template = this.removerScript(template); 
        this._elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;

    private removerScript(scape: string): string {
        const regex = /<script>[\S\s?]*?<\/script>/;
        return scape.replace(regex, '');
    }
}