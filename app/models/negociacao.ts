export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly qtde: Number, 
        public readonly valor: Number
    ) {}

    get data():Date {
        //Programação defensiva
        const data =  new Date(this._data.getTime());
        return data;
    }

    public static criar(dataString: string, qtdeString: string, valorString: string): Negociacao {
        const valueDateHtml = /-/g;
        const date = new Date(dataString.replace(valueDateHtml, ','));
        const qtde = parseInt(qtdeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date, qtde, valor);
    }
}