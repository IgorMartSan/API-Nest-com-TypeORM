import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //Os atributos do controler são chamdos de injeção de dependência
  constructor(private readonly appService: AppService) { }
  // verbo http
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
