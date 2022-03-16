export function printerLog(...objects) {
    for (let object of objects) {
        console.log(object.toText());
    }
}
