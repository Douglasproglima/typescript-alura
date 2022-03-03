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
}