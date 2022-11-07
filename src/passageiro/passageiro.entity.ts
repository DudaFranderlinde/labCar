import { PickType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString, Length, Matches, MaxLength, ValidateNested } from "class-validator";
import { cpfValidation, dateValidation } from "src/utils/regex";
import { addressDto } from "./dto/addressDto";

export class Passageiro {
    @IsString()
    id?: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Matches(dateValidation, {message: 'birthDate need to be like this dd/mm/yyyy'})
    birthDate: string;

    @IsNotEmpty()
    @IsString()
    @Length(14, 14, {message: 'cpf must be equal to 14 characters'})
    @Matches(cpfValidation, {message: 'cpf need to be like this 000.000.000-00'})
    cpf: string;

    @IsNotEmpty()
    @ValidateNested({each: true})
    @Type(()=> addressDto)
    address: addressDto[]
}