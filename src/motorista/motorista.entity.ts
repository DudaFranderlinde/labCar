import { IsEnum, IsInt, IsNotEmpty, IsString, Length, MaxLength, MinLength } from 'class-validator';
import { Status } from './status-motorista.enum';

export class Motorista {
    @IsString()
    id?: string;
    @IsEnum(Status)
    status?: Status;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    name: string;

    @IsNotEmpty()
    @IsString()
    birthDate: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(11)
    @MinLength(11)
    cpf: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(7)
    @MinLength(7)
    licensePlate: string;

    @IsNotEmpty()
    @IsString()
    model: string;
    
}