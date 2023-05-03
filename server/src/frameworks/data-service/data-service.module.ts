import { Module } from "@nestjs/common";
import { DataService } from "./data-service.service";
import { IDataService } from "src/core/abstractions/data-service.abstract";


@Module({
    providers:[{provide: IDataService, useClass:DataService}],
    exports:[IDataService]
})

export class DataServiceModule{}    
