export function logTempoExecucao(isSegundosOrMilesegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = isSegundosOrMilesegundos ? 1000 : 1;
            let unidade = isSegundosOrMilesegundos ? 'segundos' : 'milesegundos';
            const tempo1 = performance.now();
            const retornoMetodo = metodoOriginal.apply(this, args);
            const tempo2 = performance.now();
            console.log(`Tempo de execução - ${propertyKey}: ${(tempo2 - tempo1) / divisor} ${unidade}`);
            retornoMetodo;
        };
        return descriptor;
    };
}
