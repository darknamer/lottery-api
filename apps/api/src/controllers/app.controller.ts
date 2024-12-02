import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Request } from 'express';
import { TestValidationRequest } from '../view-models/test-validation-request/test-validation-request';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('main')
export class AppController {

  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(@Req() request: Request): string {
    console.log(process.env.MONGO_URL);
    return this.appService.getHello();
  }
  @Post("test/validation")
  testValidation(@Req() request: Request, @Body() body: TestValidationRequest) {
  }
}
