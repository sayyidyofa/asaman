import { Injectable } from '@nestjs/common';
import { PrismaClient, Salary } from '@prisma/client';

@Injectable()
export class AppService {
  async getHello(): Promise<Salary> {
    return new PrismaClient().salary.findMany().then(results => results[0]);
  }

  getMe(): string {
    return "Me!";
  }
}
