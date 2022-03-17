import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    constructor() {
        this._URL = 'http://localhost:8080/dados';
    }
    retornarNegociacoesAtual() {
        const retorno = fetch(this._URL)
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
        return retorno;
    }
}
//# sourceMappingURL=negociacoes-service.js.map