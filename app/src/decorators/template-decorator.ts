export function inspect() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            const retornoMetodoOriginal = metodoOriginal.apply(this, args);
            
            
            return retornoMetodoOriginal;
        }
        
        return descriptor;
    }
}