import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';

export class Motorista {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsDate()
    birthDate: Date;

    @IsNotEmpty()
    @IsString()
    @Length(8)
    cpf: string;

    @IsNotEmpty()
    @IsString()
    licensePlate: string;

    @IsNotEmpty()
    @IsString()
    model: string;

    status: string;
}