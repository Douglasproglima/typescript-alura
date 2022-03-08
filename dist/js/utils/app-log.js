export class AppLog {
    static ValidarTempoExecucao(msg, tempo1, tempo2) {
        console.log(`Tempo de execução - ${msg}: ${(tempo2 - tempo1) / 1000}`);
    }
}
