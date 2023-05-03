import { FAQ } from "../entities/faq.entity";


export abstract class IDataService<T>{
    abstract getAll():Promise<T[]>;
}