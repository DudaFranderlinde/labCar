import { IsNotEmpty, IsNumberString, IsOptional, IsString, Length, MinLength } from "class-validator";

export class addressDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5, {message: 'street must be longer than or equal to 5 characters'})
    "street": string;

    @IsNotEmpty()
    @IsNumberString()
    @Length(2,  5,{message: 'number must be longer than or equal to 2 characters'})
    "number": number;

    @IsNotEmpty()
    @IsString()
    @MinLength(4, {message: 'neighborhood must be longer than or equal to 4 characters'})
    "neighborhood": string;

    @IsNotEmpty()
    @IsString()
    @MinLength(4, {message: 'city must be longer than or equal to 4 characters'})
    "city": string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2, {message: 'state must be longer than or equal to 2 characters'})
    "state": string;

    @IsOptional()
    @IsString()
    "complement"?: string;
}