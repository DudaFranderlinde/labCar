import { IsNotEmpty, IsNumberString, IsString, Length, MinLength } from "class-validator";

export class addressDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    "street": string;

    @IsNotEmpty()
    @IsNumberString()
    @Length(2,  5,{message: 'number must be longer than or equal to 2 characters'})
    "number": number;

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    "neighborhood": string;

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    "city": string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    "state": string;
}