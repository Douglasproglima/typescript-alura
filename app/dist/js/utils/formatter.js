export class Formatter {
    static formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
    static formatarMoeda(valor) {
        return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
}
//# sourceMappingURL=formatter.js.map