export function LogTempoExecucao() { 
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        
        //Sobrescrevendo o comportamento o método original
        descriptor.value =  function(...args: Array<any>) {
            const tempo1 = performance.now();

            //apply() => Chama a execução do método original passando o contexto
            //e parâmetros que foram recebidos pela função anterior.
            const retornoMetodo = metodoOriginal.apply(this, args);

            const tempo2 = performance.now();
            console.log(`Tempo de execução - ${propertyKey}: ${(tempo2 - tempo1)/1000}`);
        
            retornoMetodo
        }

        return descriptor;
    }
}