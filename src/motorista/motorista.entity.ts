import { IsEnum, IsNotEmpty, IsString, Length, Matches, MaxLength } from 'class-validator';
import { cpfValidation, dateValidation, licensePlateValidation } from 'src/utils/regex';
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
    @Matches(dateValidation, {message: 'birthDate need to be like this dd/mm/yyyy'})
    birthDate: string;

    @IsNotEmpty()
    @IsString()
    @Length(14, 14, {message: 'cpf must be equal to 14 characters'})
    @Matches(cpfValidation, {message: 'cpf need to be like this 000.000.000-00'})
    cpf: string;

    @IsNotEmpty()
    @IsString()
    @Length(7, 7, {message: 'licensePlate must be equal to 7 characters'})
    @Matches(licensePlateValidation, {message: 'licensePlate need to be like this AAA0000 or AAA0A00'})
    licensePlate: string;

    @IsNotEmpty()
    @IsString()
    model: string;
}