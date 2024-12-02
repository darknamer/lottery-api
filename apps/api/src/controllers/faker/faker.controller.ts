import { Faker } from '@app/data/models/faker/faker';
import { Controller, Get } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Controller('api/faker')
export class FakerController {

    constructor(
        @InjectModel(Faker.name)
        private readonly faker: Model<Faker>,
    ) { }

    @Get("all")
    async all() { 
        return await this.faker.find().exec();
    }
}
