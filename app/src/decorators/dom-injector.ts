export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        
        console.log(`Modificando prototype: ${target.constructor.name}  e add getter para propertie ${propertyKey}`);

        const getter = function() {
            const elemento = document.querySelector(seletor);

            console.log(`Buscando elemento DOM com seletor: ${seletor} para injetar em: ${propertyKey}`);

            return elemento;
        }

        Object.defineProperties(target, propertyKey, {get: getter});
    }
}