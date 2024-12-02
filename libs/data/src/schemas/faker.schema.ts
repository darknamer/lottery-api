import { SchemaFactory } from "@nestjs/mongoose";
import { Faker } from "../models/faker/faker";

export const FakerSchema = SchemaFactory.createForClass(Faker);