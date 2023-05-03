import { Injectable } from "@nestjs/common";
import { IDataService } from "src/core/abstractions/data-service.abstract";
import { FAQ } from "src/core/entities/faq.entity";


@Injectable()
export class FAQUseCase{
    constructor(private dataService:IDataService<FAQ>){}

    getAllFAQs():Promise<FAQ[]>{
        return this.dataService.getAll();
    }
}