export class Negociacao {
    constructor(_data, qtde, valor) {
        this._data = _data;
        this.qtde = qtde;
        this.valor = valor;
    }
    get data() {
        //Programação defensiva
        const data = new Date(this._data.getTime());
        return data;
    }
}
