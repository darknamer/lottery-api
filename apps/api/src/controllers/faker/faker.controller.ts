import { Faker } from '@app/data/models/faker/faker';
import { FakerCreateRequest } from '@app/data/view-models/fakers/faker-create-request/faker-create-request';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
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
    @Post("create")
    async create(@Req() request: Request, @Body() body: FakerCreateRequest): Promise<Faker> {
        const createdFaker = new this.faker(body);
        return await createdFaker.save();
    }
}
