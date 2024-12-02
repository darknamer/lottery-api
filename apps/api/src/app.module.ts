import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { AppController } from './controllers/app.controller';
import { CoreModule } from '@app/core';
import { FakerController } from './controllers/faker/faker.controller';

@Module({
  imports: [
    CoreModule,
  ],
  controllers: [
    AppController,
    FakerController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {
}