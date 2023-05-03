import { Module } from "@nestjs/common";
import { DataServiceModule } from "src/frameworks/data-service/data-service.module";
import { FAQUseCase } from "./faq.use-case";


@Module({
    imports:[DataServiceModule],
    providers:[FAQUseCase],
    exports:[FAQUseCase],
})

export class FAQUseCaseModule{}