export class Negociacao {
    constructor(_data, qtde, valor) {
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
}
