export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype: ${target.constructor.name}  
                    e add getter para propertie ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elemento DOM com seletor: 
                            ${seletor} para injetar em: ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map