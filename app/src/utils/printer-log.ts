import { IPrinter } from "../interfaces/iprinter.js";

export function printerLog(...objects: Array<IPrinter>) {
    for (let object of objects) {
        console.log(object.toText())
    }
}