import { ICompare } from "./icompare.js";
import { IPrinter } from "./iprinter.js";

export interface IModel<T> extends IPrinter, ICompare<T> {
    
}