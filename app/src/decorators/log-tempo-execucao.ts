export function logTempoExecucao(isSegundosOrMilesegundos: boolean = false) { 
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        
        //Sobrescrevendo o comportamento o método original
        descriptor.value =  function(...args: Array<any>) {

            let divisor = isSegundosOrMilesegundos ? 1000 : 1;
            let unidade = isSegundosOrMilesegundos ? 'segundos': 'milesegundos'

            const tempo1 = performance.now();

            //apply() => Chama a execução do método original passando o contexto
            //e parâmetros que foram recebidos pela função anterior.
            const retornoMetodo = metodoOriginal.apply(this, args);

            const tempo2 = performance.now();
            console.log(`Tempo de execução - ${propertyKey}: ${(tempo2 - tempo1)/divisor} ${unidade}`);
        
            retornoMetodo
        }

        return descriptor;
    }
}