import { Controller, Get } from '@nestjs/common';
import { FAQUseCase } from 'src/use-cases/faq/faq.use-case';

@Controller('api/FAQs')
export class FAQController {
  constructor(private faqUseCase: FAQUseCase) {}

  @Get()
  async getAll() {
    return this.faqUseCase.getAllFAQs();
  }
}
