import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class Motorista {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    birthDate: string;

    @IsNotEmpty()
    @IsString()
    cpf: string;

    @IsNotEmpty()
    @IsString()
    licensePlate: string;

    @IsNotEmpty()
    @IsString()
    model: string;
}