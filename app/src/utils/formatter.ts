export class Formatter {

    public static formatarData(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }

    public static formatarMoeda(valor: Number): string {
        return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
}