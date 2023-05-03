import { Module } from '@nestjs/common';
import { FAQController } from './controllers/faq.controller';
import { DataServiceModule } from './frameworks/data-service/data-service.module';
import { FAQUseCaseModule } from './use-cases/faq/faq.use-case.module';

@Module({
  imports: [DataServiceModule,FAQUseCaseModule],
  controllers: [FAQController],

})
export class AppModule {}
