import { Negociacao } from "../models/negociacao";
import { Printer } from "./printer.js";

export function printerLog(...objects: Array<Printer>) {
    for (let object of objects) {
        console.log(object.toText())
    }
}