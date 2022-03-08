export function logTempoExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const tempo1 = performance.now();
            const retornoMetodo = metodoOriginal.apply(this, args);
            const tempo2 = performance.now();
            console.log(`Tempo de execução - ${propertyKey}: ${(tempo2 - tempo1) / 1000} segundos`);
            retornoMetodo;
        };
        return descriptor;
    };
}
