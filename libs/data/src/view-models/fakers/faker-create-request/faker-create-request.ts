import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class FakerCreateRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    full_name: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
}
