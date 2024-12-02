import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class TestValidationRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    username: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @Min(12)
    age: number;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(150)
    address: string;
}
