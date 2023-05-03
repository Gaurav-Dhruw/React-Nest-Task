import { Injectable } from "@nestjs/common";
import { db } from "./data";


@Injectable()
export class DataService {
   
    async getAll():Promise<any>{
        return db;
    }

} 