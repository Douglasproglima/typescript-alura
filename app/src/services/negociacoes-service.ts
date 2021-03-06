import { INegociacoesAtual } from "../interfaces/inegociacoes-atual.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    private _URL: any = 'http://localhost:8080/dados';

    public retornarNegociacoesAtual(): Promise<Negociacao[]> {
        const retorno = 
            fetch(this._URL)
                .then(res => res.json())
                .then((dados: Array<INegociacoesAtual>) => {
                    return dados.map(dado => {
                        return new Negociacao(
                            new Date(), 
                            dado.vezes, 
                            dado.montante
                        )
                    })
                });

        return retorno;
    }
}