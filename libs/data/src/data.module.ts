import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Faker } from './models/faker/faker';
import { FakerSchema } from './schemas/faker.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([
      { name: Faker.name, schema: FakerSchema },
    ]),
  ],
  providers: [],
  exports: [
    ConfigModule,
    MongooseModule,
  ],
})
export class DataModule {}
