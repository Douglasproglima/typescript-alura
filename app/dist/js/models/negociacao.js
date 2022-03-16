import { Printer } from "../utils/printer.js";
export class Negociacao extends Printer {
    constructor(_data, qtde, valor) {
        super();
        this._data = _data;
        this.qtde = qtde;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criar(dataString, qtdeString, valorString) {
        const valueDateHtml = /-/g;
        const date = new Date(dataString.replace(valueDateHtml, ','));
        const qtde = parseInt(qtdeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, qtde, valor);
    }
    toText() {
        return `Data: ${this._data},
            Qtde: ${this.qtde},
            Valor: ${this.valor}`;
    }
}
