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
    toText() {
        return `Data: ${this._data},
            Qtde: ${this.qtde},
            Valor: ${this.valor}`;
    }
    isEqual(negociacao) {
        const isNegociacaoEqual = this._data.getDate() === negociacao._data.getDate() &&
            this._data.getMonth() === negociacao._data.getMonth() &&
            this._data.getFullYear() === negociacao._data.getFullYear();
        return isNegociacaoEqual;
    }
}
