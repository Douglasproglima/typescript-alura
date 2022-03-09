export function scape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originMethod = descriptor.value;
    descriptor.value = function(...args: Array<any>) {
        let returnOriginMethod = originMethod.apply(this, args);
        const isString: boolean = typeof returnOriginMethod === 'string';  

        if(isString)
        {
            const className = this.constructor.name;
            console.log(`Escape ativado na class: ${className}`);
            
            const regex = /<script>[\S\s?]*?<\/script>/;
            returnOriginMethod = returnOriginMethod.replace(regex, '');
        }

        return returnOriginMethod;
    }

    return descriptor;
}