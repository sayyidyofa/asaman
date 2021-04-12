import { Salary } from '.prisma/client';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UnwrappedPromiseType } from './utils';

@Controller('saya')
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  @Get('api1')
  async getHello(): Promise<number> {
    return (await this.appService.getHello()).nominal;
  }
}
