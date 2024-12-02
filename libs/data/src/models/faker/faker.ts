import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Faker {
    @Prop({ required: true })
    full_name: string;
    @Prop({ required: true })
    email: string;
}
